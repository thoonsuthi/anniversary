// service-worker.js

// Event listener for messages sent to the service worker
self.addEventListener('message', event => {
      // Assuming the message contains a promise to be resolved
      const promiseToBeResolved = event.data.promise;

      // Handle the promise within the context of the service worker
      promiseToBeResolved
            .then(response => {
                  // Do something with the response (e.g., log it)
                  console.log(response);
            })
            .catch(error => {
                  // Handle errors (e.g., log the error)
                  console.error(error);
            });
});

// Event listener for installing the service worker
self.addEventListener('install', event => {
      // Perform installation steps, e.g., caching assets
      console.log('Service Worker installed');
      event.waitUntil(
            caches.open('my-cache').then(cache => {
                  return cache.addAll([
                        '/',
                        'index.html',
                        'counter.html',
                        'her_album.html',
                        'initpic.html',
                        'loveletter.html',
                        'mypic.html',
                        'ourpic.html',
                        'playlist.html',
                        'specialdays.html',
                        'manifest.json',
                        'styles.css',
                        'specialdays.css',
                        'playlist.css',
                        'notestyle.css',
                        'initpic.css',
                        'her_pic.css',
                        'counter.css',
                        'specialday.js',
                        'popup.js',
                        'playlist.js',
                        'counter.js',
                        'fonts/Pyidaungsu.ttf',
                        'fonts/WorkSans.ttf',
                        'favicons/couplepic.ico',
                        'favicons/herpic.ico',
                        'favicons/lovecounter.ico',
                        'favicons/loveletter.ico',
                        'favicons/main.ico',
                        'favicons/mypic.ico',
                        'favicons/ourpic.ico',
                        'favicons/playlist.ico',
                        'favicons/specialday.ico',
                        'img/hers/',
                        'img/Ours/',
                        'img/Mine/',
                        'img/beenloved.png',
                        'img/bg_mb.gif',
                        'img/bg.gif',
                        'img/couplepic.gif',
                        'img/herpic.gif',
                        'img/lovecounter.gif',
                        'img/loveletters.gif',
                        'img/mypic.gif',
                        'img/ourpic.gif',
                        'img/playlist.gif',
                        'img/specialdays.gif',
                        'img/us.png',
                  ]);
            })
      );
});


// Event listener for activating the service worker
self.addEventListener('activate', event => {
      // Perform activation steps, e.g., cleaning up old caches
      console.log('Service Worker activated');
});

// Event listener for fetching resources
self.addEventListener('fetch', event => {
      // Respond with cached resources or fetch from the network
      event.respondWith(
            caches.match(event.request).then(response => {
                  return response || fetch(event.request);
            })
      );
});
