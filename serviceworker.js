//
//
//

const APPLICATION_NAME = 'GPRandomizer';
const VERSION = "1";
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

//
importScripts('./js/sw-offline-google-analytics.prod.v0.0.25.js');
goog.offlineGoogleAnalytics.initialize();

//
//
//
function onInstall(event) {
  event.waitUntil(
    caches.open(CACHE_KEY).then(
      function(cache) {
        cache.addAll(STATIC_FILES);
        console.log('Success to store all static data in cache.');
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
          return fetch(event.request, {mode: 'no-cors'});
        }
      ).catch(function(error) {
        console.log('Error fetch in handler:', error);
      })
    })
  );
}

//
//
//
function onActivate(event) {
}

self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
self.addEventListener('activate', onActivate);
