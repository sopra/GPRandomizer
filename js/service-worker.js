//
//
//

const VERSION = "1";
const CACHE_KEY = "GPRandomizer" + VERSION;
const URL = location.protocol + '//' + location.hostname;
const STATIC_FILES = [
  URL + '/js/jquery.min.js',
  URL + '/js/randomizer.js',
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
//
//
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      return Promise.all(
        STATIC_FILES.map(url => {
          return fetch(new Request(url, { cache: 'no-cache', mode: 'no-cors' })).then(response => {
            return cache.put(url, response);
          });
        })
      );
    })
  );
});

//
//
//
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
