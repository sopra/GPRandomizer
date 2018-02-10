//
//
//

const APPLICATION_NAME = 'GPRandomizer';
const VERSION = "10";
const CACHE_KEY = APPLICATION_NAME + VERSION;
const APPLICATION_DIR = '/' + APPLICATION_NAME;
const URL = location.protocol + '//' +
  location.hostname +
  (location.port ? ':' + location.port : '') +
  APPLICATION_DIR;

const IMG_SUFFIX = navigator.userAgent.match(/Chrome|Opera/) ? ".webp" : "-min.png";

const STATIC_FILES = [
  URL + '/',
  URL + '/js/randomizer.js',
  '/pic/ADVfedP' + IMG_SUFFIX,
  '/pic/ADVfedV' + IMG_SUFFIX,
  '/pic/ADVgai' + IMG_SUFFIX,
  '/pic/ADVknw' + IMG_SUFFIX,
  '/pic/ADVlab' + IMG_SUFFIX,
  '/pic/ADVminB' + IMG_SUFFIX,
  '/pic/ADVminV' + IMG_SUFFIX,
  '/pic/ADVore' + IMG_SUFFIX,
  '/pic/ADVqic' + IMG_SUFFIX,
  '/pic/ADVsecO' + IMG_SUFFIX,
  '/pic/ADVsecV' + IMG_SUFFIX,
  '/pic/ADVstp' + IMG_SUFFIX,
  '/pic/ADVtrsB' + IMG_SUFFIX,
  '/pic/ADVtrsV' + IMG_SUFFIX,
  '/pic/ADVtyp' + IMG_SUFFIX,
  '/pic/BOOgai' + IMG_SUFFIX,
  '/pic/BOOknw' + IMG_SUFFIX,
  '/pic/BOOlab' + IMG_SUFFIX,
  '/pic/BOOmin' + IMG_SUFFIX,
  '/pic/BOOnav' + IMG_SUFFIX,
  '/pic/BOOpia' + IMG_SUFFIX,
  '/pic/BOOpwt' + IMG_SUFFIX,
  '/pic/BOOqic' + IMG_SUFFIX,
  '/pic/BOOter' + IMG_SUFFIX,
  '/pic/BOOtrs' + IMG_SUFFIX,
  '/pic/FEDcre' + IMG_SUFFIX,
  '/pic/FEDgle' + IMG_SUFFIX,
  '/pic/FEDknw' + IMG_SUFFIX,
  '/pic/FEDore' + IMG_SUFFIX,
  '/pic/FEDpwt' + IMG_SUFFIX,
  '/pic/FEDqic' + IMG_SUFFIX,
  '/pic/FEDvps' + IMG_SUFFIX,
  '/pic/FINbld' + IMG_SUFFIX,
  '/pic/FINfed' + IMG_SUFFIX,
  '/pic/FINgai' + IMG_SUFFIX,
  '/pic/FINsat' + IMG_SUFFIX,
  '/pic/FINsec' + IMG_SUFFIX,
  '/pic/FINtyp' + IMG_SUFFIX,
  '/pic/RNDfed' + IMG_SUFFIX,
  '/pic/RNDgai3' + IMG_SUFFIX,
  '/pic/RNDgai4' + IMG_SUFFIX,
  '/pic/RNDmin' + IMG_SUFFIX,
  '/pic/RNDpia' + IMG_SUFFIX,
  '/pic/RNDstp' + IMG_SUFFIX,
  '/pic/RNDter' + IMG_SUFFIX,
  '/pic/RNDtrs3' + IMG_SUFFIX,
  '/pic/RNDtrs4' + IMG_SUFFIX,
  '/pic/TECcre' + IMG_SUFFIX,
  '/pic/TECgai' + IMG_SUFFIX,
  '/pic/TECknw' + IMG_SUFFIX,
  '/pic/TECore' + IMG_SUFFIX,
  '/pic/TECpia' + IMG_SUFFIX,
  '/pic/TECpow' + IMG_SUFFIX,
  '/pic/TECqic' + IMG_SUFFIX,
  '/pic/TECtyp' + IMG_SUFFIX,
  '/pic/TECvps' + IMG_SUFFIX
];
//
//
//
function onInstall(event) {
  event.waitUntil(
    caches.open(CACHE_KEY).then(
      function(cache) {
        cache.addAll(STATIC_FILES);
        console.log('[ServiceWorker]', 'Success to store all static data in cache.');
      }
    )
  );
}

//
//
//
function onFetch(event) {
  event.respondWith(
    caches.open(CACHE_KEY).then(function(cache) {
      return cache.match(event.request).then(
        function(response) {
          if (response) {
            console.log('Found response in cache: ', response);
            return response;
          }
          return fetch(event.request);
        }
      ).catch(function(error) {
        console.log('Error fetch in handler:', error);
      });
    })
  );
}

//
//
//
function onActivate(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      keys.filter(function(key) {
        return 0 !== key.indexOf(CACHE_KEY);
      }).map(function(key) {
        caches.delete(key);
        console.log('[ServiceWorker]', 'Delete old cache:', key);
      });
    })
  );
}

self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
self.addEventListener('activate', onActivate);
