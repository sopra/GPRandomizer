//
//
//

const APPLICATION_NAME = 'GPRandomizer';
const VERSION = "11";
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
  URL + '/pic/ADVfedP' + IMG_SUFFIX,
  URL + '/pic/ADVfedV' + IMG_SUFFIX,
  URL + '/pic/ADVgai' + IMG_SUFFIX,
  URL + '/pic/ADVknw' + IMG_SUFFIX,
  URL + '/pic/ADVlab' + IMG_SUFFIX,
  URL + '/pic/ADVminB' + IMG_SUFFIX,
  URL + '/pic/ADVminV' + IMG_SUFFIX,
  URL + '/pic/ADVore' + IMG_SUFFIX,
  URL + '/pic/ADVqic' + IMG_SUFFIX,
  URL + '/pic/ADVsecO' + IMG_SUFFIX,
  URL + '/pic/ADVsecV' + IMG_SUFFIX,
  URL + '/pic/ADVstp' + IMG_SUFFIX,
  URL + '/pic/ADVtrsB' + IMG_SUFFIX,
  URL + '/pic/ADVtrsV' + IMG_SUFFIX,
  URL + '/pic/ADVtyp' + IMG_SUFFIX,
  URL + '/pic/BOOgai' + IMG_SUFFIX,
  URL + '/pic/BOOknw' + IMG_SUFFIX,
  URL + '/pic/BOOlab' + IMG_SUFFIX,
  URL + '/pic/BOOmin' + IMG_SUFFIX,
  URL + '/pic/BOOnav' + IMG_SUFFIX,
  URL + '/pic/BOOpia' + IMG_SUFFIX,
  URL + '/pic/BOOpwt' + IMG_SUFFIX,
  URL + '/pic/BOOqic' + IMG_SUFFIX,
  URL + '/pic/BOOter' + IMG_SUFFIX,
  URL + '/pic/BOOtrs' + IMG_SUFFIX,
  URL + '/pic/FEDcre' + IMG_SUFFIX,
  URL + '/pic/FEDgle' + IMG_SUFFIX,
  URL + '/pic/FEDknw' + IMG_SUFFIX,
  URL + '/pic/FEDore' + IMG_SUFFIX,
  URL + '/pic/FEDpwt' + IMG_SUFFIX,
  URL + '/pic/FEDqic' + IMG_SUFFIX,
  URL + '/pic/FEDvps' + IMG_SUFFIX,
  URL + '/pic/FINbld' + IMG_SUFFIX,
  URL + '/pic/FINfed' + IMG_SUFFIX,
  URL + '/pic/FINgai' + IMG_SUFFIX,
  URL + '/pic/FINsat' + IMG_SUFFIX,
  URL + '/pic/FINsec' + IMG_SUFFIX,
  URL + '/pic/FINtyp' + IMG_SUFFIX,
  URL + '/pic/RNDfed' + IMG_SUFFIX,
  URL + '/pic/RNDgai3' + IMG_SUFFIX,
  URL + '/pic/RNDgai4' + IMG_SUFFIX,
  URL + '/pic/RNDmin' + IMG_SUFFIX,
  URL + '/pic/RNDpia' + IMG_SUFFIX,
  URL + '/pic/RNDstp' + IMG_SUFFIX,
  URL + '/pic/RNDter' + IMG_SUFFIX,
  URL + '/pic/RNDtrs3' + IMG_SUFFIX,
  URL + '/pic/RNDtrs4' + IMG_SUFFIX,
  URL + '/pic/TECcre' + IMG_SUFFIX,
  URL + '/pic/TECgai' + IMG_SUFFIX,
  URL + '/pic/TECknw' + IMG_SUFFIX,
  URL + '/pic/TECore' + IMG_SUFFIX,
  URL + '/pic/TECpia' + IMG_SUFFIX,
  URL + '/pic/TECpow' + IMG_SUFFIX,
  URL + '/pic/TECqic' + IMG_SUFFIX,
  URL + '/pic/TECtyp' + IMG_SUFFIX,
  URL + '/pic/TECvps' + IMG_SUFFIX
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
