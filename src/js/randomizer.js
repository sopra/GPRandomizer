window.addEventListener('load', function() {

  const UA = navigator.userAgent;
  const IMG_SUFFIX = UA.match(/Chrome|Opera/) && UA.indexOf('Edge') == -1 ? ".webp" : "-min.png";

  const FEDERATIONS = [
    "pic/FEDcre" + IMG_SUFFIX,
    //    "pic/FEDgle" + IMG_SUFFIX,
    "pic/FEDknw" + IMG_SUFFIX,
    "pic/FEDore" + IMG_SUFFIX,
    "pic/FEDpwt" + IMG_SUFFIX,
    "pic/FEDqic" + IMG_SUFFIX,
    "pic/FEDvps" + IMG_SUFFIX
  ];

  const ROUNDSCORES = [
    "pic/RNDfed" + IMG_SUFFIX,
    "pic/RNDgai3" + IMG_SUFFIX,
    "pic/RNDgai4" + IMG_SUFFIX,
    "pic/RNDmin" + IMG_SUFFIX,
    "pic/RNDpia" + IMG_SUFFIX,
    "pic/RNDstp" + IMG_SUFFIX,
    "pic/RNDter" + IMG_SUFFIX,
    "pic/RNDtrs3" + IMG_SUFFIX,
    "pic/RNDtrs4" + IMG_SUFFIX
  ];

  const BASICTECHS = [
    "pic/TECcre" + IMG_SUFFIX,
    "pic/TECgai" + IMG_SUFFIX,
    "pic/TECknw" + IMG_SUFFIX,
    "pic/TECore" + IMG_SUFFIX,
    "pic/TECpia" + IMG_SUFFIX,
    "pic/TECpow" + IMG_SUFFIX,
    "pic/TECqic" + IMG_SUFFIX,
    "pic/TECtyp" + IMG_SUFFIX,
    "pic/TECvps" + IMG_SUFFIX
  ];

  const ADVANCEDTECHS = [
    "pic/ADVfedP" + IMG_SUFFIX,
    "pic/ADVfedV" + IMG_SUFFIX,
    "pic/ADVgai" + IMG_SUFFIX,
    "pic/ADVknw" + IMG_SUFFIX,
    "pic/ADVlab" + IMG_SUFFIX,
    "pic/ADVminB" + IMG_SUFFIX,
    "pic/ADVminV" + IMG_SUFFIX,
    "pic/ADVore" + IMG_SUFFIX,
    "pic/ADVqic" + IMG_SUFFIX,
    "pic/ADVsecO" + IMG_SUFFIX,
    "pic/ADVsecV" + IMG_SUFFIX,
    "pic/ADVstp" + IMG_SUFFIX,
    "pic/ADVtrsB" + IMG_SUFFIX,
    "pic/ADVtrsV" + IMG_SUFFIX,
    "pic/ADVtyp" + IMG_SUFFIX
  ];

  const ROUNDBOOSTERS = [
    "pic/BOOgai" + IMG_SUFFIX,
    "pic/BOOknw" + IMG_SUFFIX,
    "pic/BOOlab" + IMG_SUFFIX,
    "pic/BOOmin" + IMG_SUFFIX,
    "pic/BOOnav" + IMG_SUFFIX,
    "pic/BOOpia" + IMG_SUFFIX,
    "pic/BOOpwt" + IMG_SUFFIX,
    "pic/BOOqic" + IMG_SUFFIX,
    "pic/BOOter" + IMG_SUFFIX,
    "pic/BOOtrs" + IMG_SUFFIX
  ];

  const FINALSCORES = [
    "pic/FINbld" + IMG_SUFFIX,
    "pic/FINfed" + IMG_SUFFIX,
    "pic/FINgai" + IMG_SUFFIX,
    "pic/FINsat" + IMG_SUFFIX,
    "pic/FINsec" + IMG_SUFFIX,
    "pic/FINtyp" + IMG_SUFFIX
  ];

  const SPACESECTORS = {
    '4': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5' + IMG_SUFFIX,
      'pic/6' + IMG_SUFFIX,
      'pic/7' + IMG_SUFFIX,
      'pic/8' + IMG_SUFFIX,
      'pic/9' + IMG_SUFFIX,
      'pic/10' + IMG_SUFFIX
    ],
    '3': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5' + IMG_SUFFIX,
      'pic/6' + IMG_SUFFIX,
      'pic/7' + IMG_SUFFIX,
      'pic/8' + IMG_SUFFIX,
    ],
    '2': [
      'pic/1' + IMG_SUFFIX,
      'pic/2' + IMG_SUFFIX,
      'pic/3' + IMG_SUFFIX,
      'pic/4' + IMG_SUFFIX,
      'pic/5_' + IMG_SUFFIX,
      'pic/6_' + IMG_SUFFIX,
      'pic/7_' + IMG_SUFFIX,
    ]
  };

  const ADVTECH_NUM = 6;
  const BASTECH_NUM = 9;
  const ROUND_NUM = 6;
  const FINAL_NUM = 2;

  // array shuffle method
  function shuffle(array) {
    let narray = [].concat(array);
    var n = narray.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = narray[n];
      narray[n] = narray[i];
      narray[i] = t;
    }
    return narray;
  }

  //
  // setup federation;
  //
  function setupFederation(arg) {
    var fed = 0;
    if (!arg) {
      fed = Math.floor(Math.random() * FEDERATIONS.length);
    } else {
      fed = arg;
    }

    document.getElementById('FED').setAttribute('src', FEDERATIONS[fed]);
  }

  //
  // setup advanced Technology;
  //
  function setupAdvTech(args) {
    var advlist = shuffle(ADVANCEDTECHS);
    for (var i = 0; i < ADVTECH_NUM; i++) {
      document.getElementById('ADV' + i).setAttribute('src', advlist[i]);
    }
  }

  //
  // setup basic Tech
  //
  function setupBasicTech(args) {
    var baslist = shuffle(BASICTECHS);
    for (var i = 0; i < BASTECH_NUM; i++) {
      document.getElementById('BAS' + i).setAttribute('src', baslist[i]);
    }
  }

  //
  //
  //
  function parseHashbang(hashbang_str) {
    var hashes = hashbang_str.split('&');
    var vars = {};

    for(var i = 0; i < hashes.length; i++) {
      var hash = hashes[i].split('=');

      if(hash.length > 1) {
        vars[hash[0]] = hash[1];
      } else {
        vars[hash[0]] = null;
      }
    }

    return vars;
  }

  //
  // setup RoundScore
  //
  function setupRoundScore(args) {
    var rndlist = shuffle(ROUNDSCORES);
    for (var i = 0; i < ROUND_NUM; i++) {
      document.getElementById('RND' + i).setAttribute('src', rndlist[i]);
    }
  }

  //
  // setup FinalScore
  //
  function setupFinalScore(args) {
    var finlist = shuffle(FINALSCORES);
    for (var i = 0; i < FINAL_NUM; i++) {
      document.getElementById('FIN' + i).setAttribute('src', finlist[i]);
    }
  }

  //
  // setup Booster
  //
  function setupBooster(args) {
    let boosterdiv = document.getElementById('booster');
    let players = document.getElementById('pNumbers').value;
    let rndBoosterNum = Number(players) + 3;
    let rndboosterlist = shuffle(ROUNDBOOSTERS);
    if (boosterdiv.childElementCount != rndBoosterNum) {
      Array.prototype.forEach.call(
        document.getElementsByClassName('booster'),
        function(element) {
          element.style.display = 'none';
        }
      );
    }
    boosterdiv.style.setProperty(
      'grid-template-columns', "1fr ".repeat(rndBoosterNum)
    );
    boosterdiv.style.setProperty(
      '-ms-grid-columns', "1fr ".repeat(rndBoosterNum)
    );
    for (var i = 0; i < rndBoosterNum; i++) {
      let bItem = document.getElementById('BST' + i);
      bItem.setAttribute('src', rndboosterlist[i]);
      bItem.parentElement.style.setProperty('-ms-grid-column', i + 1);
      bItem.parentElement.style.display = 'block';
      Array.prototype.forEach.call(bItem.parentElement.classList, function(item) {
        if (5 < item.lastIndexOf('er')) {
          bItem.parentElement.classList.remove(item);
        }
      });
      bItem.parentElement.classList.add('booster' + players + 'er');
    }
  }

  //
  // map vertical grid resize
  //
  function resizeMapVerticalGridLength() {
    let map = document.getElementById('map');
    let wid = map.clientWidth;
    let unit = (wid / 20) / 2;
    map.style.gridTemplateRows = (unit + 'px ').repeat(30);
    map.style.setProperty('-ms-grid-rows', (unit + 'px').repeat(30));
  }

  //
  //
  //
  function addMapCss() {
    if (!document.querySelector('[data-map-css]')) {
      let mapcss = document.createElement('link');
      mapcss.setAttribute('rel', 'stylesheet');
      mapcss.setAttribute('href', './css/map.css');
      mapcss.setAttribute('data-map-css', '');
      document.getElementsByTagName('head')[0].appendChild(mapcss);
    }
  }

  //
  // generate random map
  //
  function generateRandomMap(players) {
    addMapCss();
    resizeMapVerticalGridLength();
    let tiles = shuffle(SPACESECTORS[players]);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-map]'),
      function(element, index) {
        let parentDiv = element.parentElement;
        parentDiv.className = 'mapItem mapTile' + index + '-' + players + 'er';
        let parentCss = parentDiv.currentStyle ||
          document.defaultView.getComputedStyle(parentDiv, '');
        if ('none' == parentCss.display) {
          return true;
        }

        let degree = Math.floor(Math.random() * 6) * 60;
        element.setAttribute('src', tiles.shift());
        element.style.transform = 'rotate(' + degree + 'deg)';
      }
    );
  }

  //
  // setup function
  //
  function setup(hashbang) {
    var args = {};
    if (hashbang == true) {
      (function () {
        const aURL = window.location.href;
        if (aURL.indexOf('#!') >= 0) {
          args = parseHashbang(aURL.slice(aURL.indexOf('#!') + 2));
        }
      }());
    }

    // setupFed
    setupFederation(args['FED']);

    // setup advanced-tech
    setupAdvTech(args);

    // setup basic-tech
    setupBasicTech(args);

    // setup round-score
    setupRoundScore(args);

    // setup final-score
    setupFinalScore(args);

    // setup round-booster
    setupBooster(args);
  }

  //
  //
  //
  document.getElementById('setup').addEventListener('click', function() {
    setup();
  });

  //
  //
  //
  document.getElementById('hide').addEventListener('click', function() {
    let menu = document.getElementsByTagName('menu')[0],
      mapMenu = document.getElementById('mapGenMenu');
    menu.style.display = 'none';
    mapMenu.style.display = 'none';
    var l = document.getElementsByTagName('main')[0].addEventListener('click', function() {
      menu.style.display = 'block';
      mapMenu.style.display = 'block';
      document.getElementsByTagName('main')[0].removeEventListener('click', l);
    });
  });

  document.getElementById('mapGen').addEventListener('click', function() {
    let pNum = document.getElementById('pNumbers').value;
    generateRandomMap(pNum);
  });

  function rotateImage(event) {
    event.stopPropagation();
    let deg = this.style.transform.match(/rotate\(([0-9]+)deg\)/);
    let newdeg = 60;
    if (deg) {
      newdeg = Number(deg[1]) + 60;
      if (newdeg >= 360) {
        newdeg -= 360;
      }
    }
    this.style.transform = 'rotate(' + newdeg + 'deg)';
  }

  Array.prototype.forEach.call(
    document.querySelectorAll('div.mapItem > img'),
    function(image) {
      image.addEventListener('click', rotateImage);
    }
  );

  let resizeQueue = null;
  let resizeWait = 300;
  window.addEventListener('resize', function() {
    clearTimeout(resizeQueue);
    resizeQueue = setTimeout(function() {
      resizeMapVerticalGridLength();
    }, resizeWait);
  });

  setup(true);
});
