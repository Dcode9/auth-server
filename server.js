<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'Games - Free AAA Titles</title>
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* CSS Variables for Theming */
        :root {
            --bg-gradient: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            --text-primary: #f9fafb; /* gray-50 */
            --text-secondary: #9ca3af; /* gray-400 */
            --glass-panel-bg: rgba(26, 26, 26, 0.5);
            --accent-red: #ff416c;
            --hover-bg: rgba(255, 255, 255, 0.05);
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #121212;
            color: var(--text-primary);
            overflow: hidden; /* Prevent body scroll */
        }
        .animated-gradient-bg {
            background: var(--bg-gradient);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .shape {
            position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.3; will-change: transform; z-index: 0;
        }
        .shape1 {
            width: 400px; height: 400px; background: var(--accent-red); top: -150px; left: -150px; animation: float 20s infinite alternate;
        }
        .shape2 {
            width: 500px; height: 500px; background: #2c5364; bottom: -200px; right: -200px; animation: float 25s infinite alternate-reverse;
        }

        @keyframes float {
            from { transform: translateY(0) translateX(0) rotate(0deg); }
            to { transform: translateY(50px) translateX(70px) rotate(180deg); }
        }

        .glass-panel {
            background: var(--glass-panel-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-link.active {
            color: var(--accent-red);
            background-color: var(--hover-bg);
        }
        
        /* Custom Scrollbars */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Page transition animations */
        .page-enter { animation: fadeIn 0.5s ease-in-out; }
        .page-exit { animation: fadeOut 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-20px); } }
    </style>
</head>
<body class="animated-gradient-bg">
    <!-- Floating Shapes -->
    <div class="absolute inset-0">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
    </div>

    <div class="relative flex h-screen w-full p-4 gap-4">
        <!-- Floating Sidebar Navigation -->
        <aside id="sidebar" class="h-full glass-panel rounded-3xl p-6 flex-shrink-0 flex flex-col z-20 shadow-2xl shadow-black/30 transition-all duration-300 w-72">
            <div class="flex items-center justify-between mb-12">
                <h1 id="sidebar-title" class="text-3xl font-bold pl-3 transition-opacity duration-300">D'Games</h1>
                <button id="collapse-btn" class="p-2 rounded-full hover:bg-[color:var(--hover-bg)]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
            <nav class="flex-1">
                <ul>
                    <li class="mb-2"><a href="#home" class="nav-link active flex items-center text-lg p-3 rounded-xl hover:bg-[color:var(--hover-bg)] transition"><svg class="w-6 h-6 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><span class="nav-text">Home</span></a></li>
                    <li class="mb-2"><a href="#all-games" class="nav-link flex items-center text-lg p-3 rounded-xl hover:bg-[color:var(--hover-bg)] transition"><svg class="w-6 h-6 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg><span class="nav-text">All Games</span></a></li>
                    <li><a href="#upcoming" class="nav-link flex items-center text-lg p-3 rounded-xl hover:bg-[color:var(--hover-bg)] transition"><svg class="w-6 h-6 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span class="nav-text">Upcoming</span></a></li>
                </ul>
            </nav>
            <!-- DYNAMIC AUTH SECTION -->
            <div id="auth-section" class="mt-auto pt-6 border-t border-white/10">
                <div id="auth-error" class="hidden text-red-400 text-sm mb-2 p-2 bg-red-900/50 rounded-lg"></div>
                <!-- Logged In State (hidden by default) -->
                <div id="user-profile" class="hidden">
                    <div class="flex items-center p-3">
                        <img id="user-avatar" src="https://placehold.co/40x40/ff416c/ffffff?text=U" alt="User Avatar" class="w-10 h-10 rounded-full mr-4 flex-shrink-0">
                        <div class="nav-text">
                            <p id="user-name" class="font-semibold">User</p>
                            <p id="user-credits" class="text-sm text-gray-400">Credits: 0</p>
                        </div>
                    </div>
                    <button id="sign-out-btn" class="w-full mt-2 text-center p-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/40 transition">
                        <span class="nav-text">Sign Out</span>
                    </button>
                </div>
        
                <!-- Logged Out State (visible by default) -->
                <div id="sign-in-prompt">
                     <button id="sign-in-btn" class="w-full flex items-center text-lg p-3 rounded-xl hover:bg-[color:var(--hover-bg)] transition">
                        <svg class="w-6 h-6 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                        <span class="nav-text">Sign In</span>
                    </button>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col">
            <div class="relative flex-1 h-full overflow-y-auto custom-scrollbar">
                <!-- Sticky Header -->
                <div class="sticky top-0 z-10 glass-panel rounded-3xl p-4 mb-4 flex justify-between items-center">
                    <h2 id="page-title" class="text-3xl font-bold">Home</h2>
                    <div class="relative w-1/3">
                        <input type="text" id="search-bar" placeholder="Search all games..." class="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-red)]">
                        <svg class="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
                
                <div id="page-container" class="px-2">
                    <!-- Home Page -->
                    <div id="home" class="page-content">
                        <!-- New Catchy Headline Section -->
                        <section class="my-16 text-center">
                            <h2 class="text-5xl md:text-6xl font-extrabold leading-tight">
                                Your one stop destination for
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent-red)] to-red-400">
                                    AAA games for FREE
                                </span>
                            </h2>
                        </section>

                        <!-- Action Adventure Section -->
                        <section class="mb-12">
                            <h3 class="text-2xl font-bold mb-4">Action Adventure</h3>
                            <div class="flex space-x-6 pb-4 overflow-x-auto custom-scrollbar">
                                <!-- Game Cards populated by JS -->
                            </div>
                        </section>
                        <!-- Shooting Section -->
                        <section class="mb-12">
                            <h3 class="text-2xl font-bold mb-4">Shooting</h3>
                            <div class="flex space-x-6 pb-4 overflow-x-auto custom-scrollbar">
                                <!-- Game Cards populated by JS -->
                            </div>
                        </section>
                    </div>

                    <!-- All Games Page -->
                    <div id="all-games" class="page-content hidden">
                         <div id="all-games-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <!-- Game data will be populated by JS -->
                         </div>
                    </div>

                    <!-- Upcoming Page -->
                    <div id="upcoming" class="page-content hidden">
                        <div id="upcoming-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <!-- Game data will be populated by JS -->
                        </div>
                    </div>
                    
                    <!-- Game Detail Page -->
                    <div id="game-detail" class="page-content hidden">
                        <button id="back-btn" class="glass-panel p-2 rounded-full mb-4 hover:bg-white/20"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></button>
                        <div class="glass-panel rounded-3xl p-8">
                            <div class="flex flex-col md:flex-row gap-8">
                                <img id="detail-img" src="" class="w-full md:w-1/3 rounded-2xl object-cover">
                                <div class="flex-1">
                                    <h2 id="detail-title" class="text-4xl font-bold mb-2"></h2>
                                    <p id="detail-dev" class="text-lg text-gray-400 mb-6"></p>
                                    <h3 class="text-2xl font-semibold mb-2">About This Game</h3>
                                    <p id="detail-desc" class="text-gray-300 mb-8"></p>
                                    <a id="detail-download-btn" href="#" target="_blank" class="bg-[color:var(--accent-red)] text-white font-semibold py-3 px-6 rounded-xl text-lg hover:scale-105 transition-transform inline-block">Download Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- ELEMENT REFERENCES ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageTitle = document.getElementById('page-title');
            const searchBar = document.getElementById('search-bar');
            const allGamesGrid = document.getElementById('all-games-grid');
            const sidebar = document.getElementById('sidebar');
            const collapseBtn = document.getElementById('collapse-btn');
            const sidebarTitle = document.getElementById('sidebar-title');
            const navTexts = document.querySelectorAll('.nav-text');
            const backBtn = document.getElementById('back-btn');

            // Auth elements
            const userProfile = document.getElementById('user-profile');
            const signInPrompt = document.getElementById('sign-in-prompt');
            const signInBtn = document.getElementById('sign-in-btn');
            const signOutBtn = document.getElementById('sign-out-btn');
            const userNameEl = document.getElementById('user-name');
            const userCreditsEl = document.getElementById('user-credits');
            const userAvatarEl = document.getElementById('user-avatar');
            const authErrorEl = document.getElementById('auth-error');

            // --- STATE ---
            let lastActivePage = 'home';

            // --- DATA ---
            const allGamesData = [
                { id: 'gta5', title: 'Grand Theft Auto V', dev: 'Rockstar Games', category: 'Action Adventure', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202203/0811/rS1c1aor6y3Mh4n13Nf3b2vi.png', desc: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.', link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/' },
                { id: 'rdr2', title: 'Red Dead Redemption 2', dev: 'Rockstar Games', category: 'Action Adventure', img: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02ljdBodKFBiziorYgqftTq.png', desc: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.', link: '#' },
                { id: 'witcher3', title: 'The Witcher 3: Wild Hunt', dev: 'CD Projekt Red', category: 'Action Adventure', img: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1717/Z2d2d921762145Ab2f22b27D.png', desc: 'The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.', link: '#' },
                { id: 'cyberpunk', title: 'Cyberpunk 2077', dev: 'CD Projekt Red', category: 'Shooting', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/C2A5NA5o648v2Gk42F50d9dJ.png', desc: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.', link: '#' },
                { id: 'doom', title: 'DOOM Eternal', dev: 'id Software', category: 'Shooting', img: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2214/p44aR7iS0b616nB8f5kPmj8r.png', desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.', link: '#' },
            ];
            
            const upcomingGamesData = [
                 { id: 'uncharted', title: 'Uncharted: Legacy of Thieves', dev: 'Naughty Dog', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/0222/a003s0V10vmLo1a025V01AvR.png' }
            ];

            // --- AUTHENTICATION LOGIC ---
            async function initializeAuth() {
                try {
                    const response = await fetch('https://authfordev.dverse.fun/api/user', {
                        credentials: 'include'
                    });

                    if (!response.ok) {
                        renderLoggedOutState();
                        return;
                    }
                    const userData = await response.json();
                    renderLoggedInState(userData);
                } catch (error) {
                    console.error("Auth check failed:", error);
                    authErrorEl.textContent = `Auth Error: ${error.message}. Check CORS.`;
                    authErrorEl.classList.remove('hidden');
                    renderLoggedOutState();
                }
            }

            function renderLoggedInState(userData) {
                authErrorEl.classList.add('hidden');
                signInPrompt.style.display = 'none';
                userProfile.style.display = 'block';
                userNameEl.textContent = userData.name;
                userCreditsEl.textContent = `Credits: ${userData.credits}`;
                userAvatarEl.src = userData.avatarUrl;
            }

            function renderLoggedOutState() {
                signInPrompt.style.display = 'block';
                userProfile.style.display = 'none';
            }

            function signOut() {
                window.location.href = `https://authfordev.dverse.fun/logout?redirect_url=${encodeURIComponent(window.location.href)}`;
            }

            // --- UI & PAGE LOGIC ---

            function createGameCard(game) {
                return `
                    <div class="game-card glass-panel rounded-2xl p-4 cursor-pointer" data-game-id="${game.id}">
                        <img src="${game.img}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/0f2027/ffffff?text=Image+Not+Found';" class="rounded-lg mb-4 h-40 w-full object-cover">
                        <h4 class="font-semibold truncate">${game.title}</h4>
                        <p class="text-sm text-gray-400">${game.dev}</p>
                    </div>
                `;
            }

            function renderHomePage() {
                const actionSection = document.querySelector('#home section:nth-child(2) div');
                const shootingSection = document.querySelector('#home section:nth-child(3) div');
                actionSection.innerHTML = allGamesData.filter(g => g.category === 'Action Adventure').map(g => `<div class="flex-shrink-0 w-72">${createGameCard(g)}</div>`).join('');
                shootingSection.innerHTML = allGamesData.filter(g => g.category === 'Shooting').map(g => `<div class="flex-shrink-0 w-72">${createGameCard(g)}</div>`).join('');
            }

            function renderAllGames(filter = '') {
                const filteredGames = allGamesData.filter(game => game.title.toLowerCase().includes(filter.toLowerCase()));
                if (filteredGames.length === 0) {
                    allGamesGrid.innerHTML = `<p class="col-span-4 text-center text-gray-400">No games found.</p>`;
                } else {
                    allGamesGrid.innerHTML = filteredGames.map(createGameCard).join('');
                }
            }
            
            function renderUpcomingGames() {
                const upcomingGrid = document.getElementById('upcoming-grid');
                upcomingGrid.innerHTML = upcomingGamesData.map(createGameCard).join('');
            }

            function showPage(pageId, isFromHistory = false) {
                const currentActive = document.querySelector('.page-content:not(.hidden)');
                if (currentActive) {
                    currentActive.classList.add('page-exit');
                    setTimeout(() => {
                        currentActive.classList.add('hidden');
                        currentActive.classList.remove('page-exit');
                    }, 300);
                }
                
                setTimeout(() => {
                    const targetPage = document.getElementById(pageId);
                    if (targetPage) {
                        targetPage.classList.remove('hidden');
                        targetPage.classList.add('page-enter');
                    }
                }, 300);

                if (pageId !== 'game-detail') {
                    lastActivePage = pageId;
                }

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const activePageId = (pageId === 'game-detail') ? lastActivePage : pageId;
                    if (link.getAttribute('href') === `#${activePageId}`) {
                        link.classList.add('active');
                        if (pageId !== 'game-detail') {
                            pageTitle.textContent = link.textContent.trim();
                        }
                    }
                });
            }

            function showGameDetail(gameId) {
                const game = allGamesData.find(g => g.id === gameId);
                if (!game) return;

                document.getElementById('detail-img').src = game.img;
                document.getElementById('detail-title').textContent = game.title;
                document.getElementById('detail-dev').textContent = game.dev;
                document.getElementById('detail-desc').textContent = game.desc;
                document.getElementById('detail-download-btn').href = game.link;
                
                showPage('game-detail');
                pageTitle.textContent = game.title;
            }

            // --- EVENT LISTENERS ---

            signInBtn.addEventListener('click', () => {
                const redirectUrl = window.location.href.split('?')[0];
                window.location.href = `https://authfordev.dverse.fun/login?redirect_url=${encodeURIComponent(redirectUrl)}`;
            });

            signOutBtn.addEventListener('click', signOut);

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.getAttribute('href').substring(1);
                    showPage(pageId);
                });
            });

            searchBar.addEventListener('input', (e) => {
                showPage('all-games');
                renderAllGames(e.target.value);
            });
            
            collapseBtn.addEventListener('click', () => {
                sidebar.classList.toggle('w-72');
                sidebar.classList.toggle('w-24');
                sidebarTitle.classList.toggle('opacity-0');
                sidebarTitle.classList.toggle('opacity-100');
                navTexts.forEach(text => text.classList.toggle('hidden'));
                sidebarTitle.textContent = sidebar.classList.contains('w-24') ? "D'" : "D'Games";
            });

            document.getElementById('page-container').addEventListener('click', (e) => {
                const card = e.target.closest('.game-card');
                if (card) {
                    showGameDetail(card.dataset.gameId);
                }
            });

            backBtn.addEventListener('click', () => {
                showPage(lastActivePage, true);
            });

            // --- INITIALIZATION ---
            initializeAuth();
            renderHomePage();
            renderAllGames();
            renderUpcomingGames();
            showPage('home');
        });
    </script>
</body>
</html>
