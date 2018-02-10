//
//
//

const APPLICATION_NAME = 'GPRandomizer';
const VERSION = "9";
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
  '/pic/ADVfedP' + IMAGE_SUFFIX,
  '/pic/ADVfedV' + IMAGE_SUFFIX,
  '/pic/ADVgai' + IMAGE_SUFFIX,
  '/pic/ADVknw' + IMAGE_SUFFIX,
  '/pic/ADVlab' + IMAGE_SUFFIX,
  '/pic/ADVminB' + IMAGE_SUFFIX,
  '/pic/ADVminV' + IMAGE_SUFFIX,
  '/pic/ADVore' + IMAGE_SUFFIX,
  '/pic/ADVqic' + IMAGE_SUFFIX,
  '/pic/ADVsecO' + IMAGE_SUFFIX,
  '/pic/ADVsecV' + IMAGE_SUFFIX,
  '/pic/ADVstp' + IMAGE_SUFFIX,
  '/pic/ADVtrsB' + IMAGE_SUFFIX,
  '/pic/ADVtrsV' + IMAGE_SUFFIX,
  '/pic/ADVtyp' + IMAGE_SUFFIX,
  '/pic/BOOgai' + IMAGE_SUFFIX,
  '/pic/BOOknw' + IMAGE_SUFFIX,
  '/pic/BOOlab' + IMAGE_SUFFIX,
  '/pic/BOOmin' + IMAGE_SUFFIX,
  '/pic/BOOnav' + IMAGE_SUFFIX,
  '/pic/BOOpia' + IMAGE_SUFFIX,
  '/pic/BOOpwt' + IMAGE_SUFFIX,
  '/pic/BOOqic' + IMAGE_SUFFIX,
  '/pic/BOOter' + IMAGE_SUFFIX,
  '/pic/BOOtrs' + IMAGE_SUFFIX,
  '/pic/FEDcre' + IMAGE_SUFFIX,
  '/pic/FEDgle' + IMAGE_SUFFIX,
  '/pic/FEDknw' + IMAGE_SUFFIX,
  '/pic/FEDore' + IMAGE_SUFFIX,
  '/pic/FEDpwt' + IMAGE_SUFFIX,
  '/pic/FEDqic' + IMAGE_SUFFIX,
  '/pic/FEDvps' + IMAGE_SUFFIX,
  '/pic/FINbld' + IMAGE_SUFFIX,
  '/pic/FINfed' + IMAGE_SUFFIX,
  '/pic/FINgai' + IMAGE_SUFFIX,
  '/pic/FINsat' + IMAGE_SUFFIX,
  '/pic/FINsec' + IMAGE_SUFFIX,
  '/pic/FINtyp' + IMAGE_SUFFIX,
  '/pic/RNDfed' + IMAGE_SUFFIX,
  '/pic/RNDgai3' + IMAGE_SUFFIX,
  '/pic/RNDgai4' + IMAGE_SUFFIX,
  '/pic/RNDmin' + IMAGE_SUFFIX,
  '/pic/RNDpia' + IMAGE_SUFFIX,
  '/pic/RNDstp' + IMAGE_SUFFIX,
  '/pic/RNDter' + IMAGE_SUFFIX,
  '/pic/RNDtrs3' + IMAGE_SUFFIX,
  '/pic/RNDtrs4' + IMAGE_SUFFIX,
  '/pic/TECcre' + IMAGE_SUFFIX,
  '/pic/TECgai' + IMAGE_SUFFIX,
  '/pic/TECknw' + IMAGE_SUFFIX,
  '/pic/TECore' + IMAGE_SUFFIX,
  '/pic/TECpia' + IMAGE_SUFFIX,
  '/pic/TECpow' + IMAGE_SUFFIX,
  '/pic/TECqic' + IMAGE_SUFFIX,
  '/pic/TECtyp' + IMAGE_SUFFIX,
  '/pic/TECvps' + IMAGE_SUFFIX
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
