/* eslint-disable no-restricted-globals */
const CACHE_VERSION = 2
const CACHE_NAME = `hugobusiness-web-console-v${CACHE_VERSION}`

const urlsToCache = [
  '/fonts/GothamHTF-Book.woff2',
  '/fonts/GothamHTF-Bold.woff2',
]

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

// Update a service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            // delete old caches
            return caches.delete(cacheName)
          }
          return null
        })
      )
    })
  )
})
