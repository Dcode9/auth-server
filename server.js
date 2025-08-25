// --- DEPENDENCIES ---
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { createClient } = require('@vercel/kv');
require('dotenv').config();

// --- ENVIRONMENT VARIABLE VALIDATION (IMPROVED FOR DEBUGGING) ---
console.log('--- Checking Environment Variables ---');
const requiredEnvVars = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'COOKIE_SECRET',
  'ADMIN_PASSWORD',
  'KV_URL',
  'KV_TOKEN'
];
let allVarsPresent = true;

for (const varName of requiredEnvVars) {
  if (process.env[varName]) {
    console.log(`[OK] ${varName} is present.`);
  } else {
    console.error(`[FATAL ERROR] Environment variable "${varName}" is NOT DEFINED.`);
    allVarsPresent = false;
  }
}
console.log('------------------------------------');

// Exit gracefully if any required variable is missing.
if (!allVarsPresent) {
  console.error('One or more required environment variables are missing. Exiting.');
  process.exit(1);
}


// --- INITIALIZATION ---
const app = express();
const PORT = process.env.PORT || 3000;

// --- VERCEL KV DATABASE CLIENT ---
// This will now only run if the variables were confirmed to be present.
const kv = createClient({
  url: process.env.KV_URL,
  token: process.env.KV_TOKEN,
});

// --- MIDDLEWARE SETUP ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use(passport.initialize());

// --- PASSPORT (GOOGLE OAUTH) CONFIGURATION ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/callback`,
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    
    let user = await kv.get(email);

    if (!user) {
        console.log(`New user detected: ${email}. Creating account.`);
        const newUser = {
            name: profile.displayName,
            email: email,
            avatarUrl: profile.photos[0].value,
            credits: 100
        };
        await kv.set(email, JSON.stringify(newUser));
    } else {
        console.log(`Existing user logged in: ${email}`);
    }
    
    return done(null, profile);
  }
));

// --- API ENDPOINTS ---

// 1. The /login Endpoint
app.get('/login', (req, res) => {
    const { redirect_url } = req.query;
    if (redirect_url) {
        req.session.redirectUrl = redirect_url;
    }
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
});

// 2. The /auth/google/callback Endpoint
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    const email = req.user.emails[0].value;
    
    res.cookie('dverseSessionToken', email, {
        domain: '.dverse.fun',
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax'
    });

    const redirectUrl = req.session.redirectUrl || 'https://dverse.fun';
    req.session.redirectUrl = null;
    res.redirect(redirectUrl);
  }
);

// 3. The /api/user Endpoint (Protected)
app.get('/api/user', async (req, res) => {
    const token = req.cookies.dverseSessionToken;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No session token' });
    }

    const user = await kv.get(token);
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized: Invalid session' });
    }

    res.json(JSON.parse(user));
});

// 4. The /admin Endpoint (Password Protected)
const basicAuth = require('express-basic-auth');

app.use('/admin', basicAuth({
    users: { 'admin': process.env.ADMIN_PASSWORD },
    challenge: true,
    realm: 'AdminArea',
}));

// GET route for the admin page
app.get('/admin', async (req, res) => {
    let userListHtml = '';
    const userEmails = await kv.keys('*'); 

    for (const email of userEmails) {
        const userData = await kv.get(email);
        if (userData) {
            const user = JSON.parse(userData);
            userListHtml += `
                <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px;">
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Credits:</strong> ${user.credits}</p>
                    <form action="/admin" method="POST" style="margin-top: 10px;">
                        <input type="hidden" name="email" value="${user.email}">
                        <label for="credits-${user.email}">New Credits:</label>
                        <input type="number" id="credits-${user.email}" name="credits" value="${user.credits}" required>
                        <button type="submit">Update</button>
                    </form>
                </div>
            `;
        }
    }

    res.send(`
        <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Admin Dashboard</title>
        <style>body{font-family:sans-serif;padding:20px;} h1{color:#333;}</style></head>
        <body><h1>User Management</h1>${userListHtml || '<p>No users found.</p>'}</body></html>
    `);
});

// POST route for updating credits from the admin page
app.post('/admin', async (req, res) => {
    const { email, credits } = req.body;
    const user = await kv.get(email);

    if (user) {
        const userData = JSON.parse(user);
        userData.credits = parseInt(credits, 10);
        await kv.set(email, JSON.stringify(userData));
        console.log(`Updated credits for ${email} to ${credits}`);
    } else {
        console.error(`Attempted to update non-existent user: ${email}`);
    }
    res.redirect('/admin');
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Auth server listening on port ${PORT}`);
});
