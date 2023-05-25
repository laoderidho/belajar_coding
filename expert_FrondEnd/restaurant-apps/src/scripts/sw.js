import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Push notification received');
});

self.addEventListener('fetch', () => {
  console.log('Fetch event received');
});
