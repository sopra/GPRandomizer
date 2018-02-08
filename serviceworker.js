//
//
//

const APPLICATION_NAME = 'GPRandomizer';
const VERSION = "4";
const CACHE_KEY = APPLICATION_NAME + VERSION;
const APPLICATION_DIR = '/' + APPLICATION_NAME;
const URL = location.protocol + '//' +
  location.hostname +
  (location.port ? ':' + location.port : '') +
  APPLICATION_DIR;
const STATIC_FILES = [
  URL + '/',
  URL + '/js/jquery.min.js',
  URL + '/js/randomizer.js',
  URL + '/css/pure-7th-grid.css',
  URL + '/css/pure-min.css',
];

const PNG_FILES = [
  URL + '/pic/ADVfedP.png',
  URL + '/pic/ADVfedV.png',
  URL + '/pic/ADVgai.png',
  URL + '/pic/ADVknw.png',
  URL + '/pic/ADVlab.png',
  URL + '/pic/ADVminB.png',
  URL + '/pic/ADVminV.png',
  URL + '/pic/ADVore.png',
  URL + '/pic/ADVqic.png',
  URL + '/pic/ADVsecO.png',
  URL + '/pic/ADVsecV.png',
  URL + '/pic/ADVstp.png',
  URL + '/pic/ADVtrsB.png',
  URL + '/pic/ADVtrsV.png',
  URL + '/pic/ADVtyp.png',
  URL + '/pic/BOOgai.png',
  URL + '/pic/BOOknw.png',
  URL + '/pic/BOOlab.png',
  URL + '/pic/BOOmin.png',
  URL + '/pic/BOOnav.png',
  URL + '/pic/BOOpia.png',
  URL + '/pic/BOOpwt.png',
  URL + '/pic/BOOqic.png',
  URL + '/pic/BOOter.png',
  URL + '/pic/BOOtrs.png',
  URL + '/pic/FEDcre.png',
  URL + '/pic/FEDgle.png',
  URL + '/pic/FEDknw.png',
  URL + '/pic/FEDore.png',
  URL + '/pic/FEDpwt.png',
  URL + '/pic/FEDqic.png',
  URL + '/pic/FEDvps.png',
  URL + '/pic/FINbld.png',
  URL + '/pic/FINfed.png',
  URL + '/pic/FINgai.png',
  URL + '/pic/FINsat.png',
  URL + '/pic/FINsec.png',
  URL + '/pic/FINtyp.png',
  URL + '/pic/RNDfed.png',
  URL + '/pic/RNDgai3.png',
  URL + '/pic/RNDgai4.png',
  URL + '/pic/RNDmin.png',
  URL + '/pic/RNDpia.png',
  URL + '/pic/RNDstp.png',
  URL + '/pic/RNDter.png',
  URL + '/pic/RNDtrs3.png',
  URL + '/pic/RNDtrs4.png',
  URL + '/pic/TECcre.png',
  URL + '/pic/TECgai.png',
  URL + '/pic/TECknw.png',
  URL + '/pic/TECore.png',
  URL + '/pic/TECpia.png',
  URL + '/pic/TECpow.png',
  URL + '/pic/TECqic.png',
  URL + '/pic/TECtyp.png',
  URL + '/pic/TECvps.png'
];

const WEBP_FILES = [
  URL + '/pic/ADVfedP.webp',
  URL + '/pic/ADVfedV.webp',
  URL + '/pic/ADVgai.webp',
  URL + '/pic/ADVknw.webp',
  URL + '/pic/ADVlab.webp',
  URL + '/pic/ADVminB.webp',
  URL + '/pic/ADVminV.webp',
  URL + '/pic/ADVore.webp',
  URL + '/pic/ADVqic.webp',
  URL + '/pic/ADVsecO.webp',
  URL + '/pic/ADVsecV.webp',
  URL + '/pic/ADVstp.webp',
  URL + '/pic/ADVtrsB.webp',
  URL + '/pic/ADVtrsV.webp',
  URL + '/pic/ADVtyp.webp',
  URL + '/pic/BOOgai.webp',
  URL + '/pic/BOOknw.webp',
  URL + '/pic/BOOlab.webp',
  URL + '/pic/BOOmin.webp',
  URL + '/pic/BOOnav.webp',
  URL + '/pic/BOOpia.webp',
  URL + '/pic/BOOpwt.webp',
  URL + '/pic/BOOqic.webp',
  URL + '/pic/BOOter.webp',
  URL + '/pic/BOOtrs.webp',
  URL + '/pic/FEDcre.webp',
  URL + '/pic/FEDgle.webp',
  URL + '/pic/FEDknw.webp',
  URL + '/pic/FEDore.webp',
  URL + '/pic/FEDpwt.webp',
  URL + '/pic/FEDqic.webp',
  URL + '/pic/FEDvps.webp',
  URL + '/pic/FINbld.webp',
  URL + '/pic/FINfed.webp',
  URL + '/pic/FINgai.webp',
  URL + '/pic/FINsat.webp',
  URL + '/pic/FINsec.webp',
  URL + '/pic/FINtyp.webp',
  URL + '/pic/RNDfed.webp',
  URL + '/pic/RNDgai3.webp',
  URL + '/pic/RNDgai4.webp',
  URL + '/pic/RNDmin.webp',
  URL + '/pic/RNDpia.webp',
  URL + '/pic/RNDstp.webp',
  URL + '/pic/RNDter.webp',
  URL + '/pic/RNDtrs3.webp',
  URL + '/pic/RNDtrs4.webp',
  URL + '/pic/TECcre.webp',
  URL + '/pic/TECgai.webp',
  URL + '/pic/TECknw.webp',
  URL + '/pic/TECore.webp',
  URL + '/pic/TECpia.webp',
  URL + '/pic/TECpow.webp',
  URL + '/pic/TECqic.webp',
  URL + '/pic/TECtyp.webp',
  URL + '/pic/TECvps.webp'
];
//
//
//
function onInstall(event) {
  event.waitUntil(
    caches.open(CACHE_KEY).then(
      function(cache) {
        var files = STATIC_FILES;
        if (navigator.userAgent.match(/Chrome|Opera/)) {
          files = files.concat(WEBP_FILES);
        } else {
          files = files.concat(PNG_FILES);
        }
        cache.addAll(files);
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
