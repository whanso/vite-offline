import {
  NavigationRoute,
  registerRoute,
  setDefaultHandler,
} from "workbox-routing";
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
} from "workbox-precaching";
import { NetworkFirst } from "workbox-strategies";

self.__WB_DISABLE_DEV_LOGS = true;

setDefaultHandler(new NetworkFirst());

// offlineFallback();

// precacheAndRoute(self.__WB_MANIFEST);

// // clean old assets
// cleanupOutdatedCaches();

// // registerRoute(({ url }) => {
// //   console.log(url);
// //   return url.origin === "http://localhost";
// // }, new NetworkFirst({ cacheName: "test-responses" }));

// let allowlist;
// if (import.meta.env.DEV) allowlist = [/^\/$/];

// // to allow work offline
// registerRoute(
//   new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist })
// );
