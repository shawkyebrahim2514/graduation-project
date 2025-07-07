/**
 * Service worker for PWA support
 */

const CACHE_NAME = 'graduation-project-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/tailwind-overrides.css',
    '/js/page-controller.js',
    '/js/utils/index.js',
    '/js/data/index.js',
    '/js/data/tools.js',
    '/js/data/project-content.js',
    '/js/data/team-members.js',
    '/js/pages/project-documentation/components/tools-section.js',
    '/manifest.json',
    '/assets/favicon.ico',
    '/assets/Graduation Hat 3.svg',
    '/assets/Graduation Paper 2.svg',
    '/assets/coming-soon.svg',
    '/assets/404.svg',
    // Tool icons
    '/assets/Tools/algolia.svg',
    '/assets/Tools/discord.svg',
    '/assets/Tools/fal-ai.svg',
    '/assets/Tools/firebase.svg',
    '/assets/Tools/flutter.svg',
    '/assets/Tools/github-copilot.svg',
    '/assets/Tools/google-cloud.svg',
    '/assets/Tools/google-location.svg',
    '/assets/Tools/lucid-chart.svg',
    '/assets/Tools/ms-word.svg',
    '/assets/Tools/node-js.svg',
    '/assets/Tools/react-js.svg',
    '/assets/Tools/replicate-ai.svg',
    '/assets/Tools/swagger.svg',
    '/assets/Tools/upstash.svg',
    '/assets/Tools/vercel.svg',
    '/assets/Tools/vertex-ai.svg',
    '/assets/Tools/vs-code.svg',
    // Add more assets as needed
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
