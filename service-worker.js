const cacheName = 'beenloved-cache-v1';
const filesToCache = [
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
];

self.addEventListener('install', function (e) {
      e.waitUntil(
            caches.open(cacheName).then(function (cache) {
                  return cache.addAll(filesToCache);
            })
      );
});

self.addEventListener('fetch', function (e) {
      e.respondWith(
            caches.match(e.request).then(function (response) {
                  return response || fetch(e.request);
            })
      );
});
