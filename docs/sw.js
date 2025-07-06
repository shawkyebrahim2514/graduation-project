/**
 * Service worker for PWA support
 */

const CACHE_NAME = 'graduation-project-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/page-controller.js',
    '/manifest.json',
    '/assets/favicon.ico',
    '/assets/Graduation Hat 3.svg',
    '/assets/Graduation Paper 2.svg',
    '/assets/coming-soon.svg',
    '/assets/404.svg',
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
