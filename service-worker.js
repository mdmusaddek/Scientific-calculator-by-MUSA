const cacheName = "musa-calculator-v2";

const filesToCache = [
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",
    "profile.png",
    "sci icon.png"
];


// Install

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(cacheName)
        .then(cache => {

            return cache.addAll(filesToCache);

        })

    );

});



// Fetch

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })

    );

});
