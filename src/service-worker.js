console.log('SW is in!');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute(
    [
      '/'
    ]
  );

  workbox.routing.registerRoute(
    '/*',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  workbox.routing.registerRoute(
    /\.(?:js|css|html|svg)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  workbox.routing.registerRoute(
    /.*(?:hacker-news.firebaseio)\.com/,
    new workbox.strategies.StaleWhileRevalidate(),
  );
}
