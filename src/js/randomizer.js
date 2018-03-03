const GPRandomizer = {};

//
// Menu Select
//
GPRandomizer.Menu = {

  id: 'pNumbers',

  players: function(p) {
    if (p && p > 1 && p < 5) {
      console.debug('[GPRandomizer.Menu.players]', 'p =>', p);
      document.getElementById(this.id).value = p;
    }
    return document.getElementById(this.id).value;
  }
};

GPRandomizer.BoardState = {
  players: '',
  federation: '',
  advancedTechs: [],
  basicTechs: [],
  roundScores: [],
  finalScores: [],
  roundBoosters: [],
  map: [],
  toHashbangString: function() {
    let hbString = '#!' +
      'PLAYERS=' + this.players + '&' +
      'FED=' + this.federation + '&' + 
      'ADV=' + this.advancedTechs.join(',') + '&' +
      'BAS=' + this.basicTechs.join(',') + '&' +
      'RND=' + this.roundScores.join(',') + '&' +
      'FIN=' + this.finalScores.join(',') + '&' +
      'BOO=' + this.roundBoosters.join(',');
    return hbString;
  }
};

GPRandomizer.Board = {};

GPRandomizer.Board.Federation = {};

GPRandomizer.Map = {

  boardId: 'map',

  setPreset: function(preset) {
    console.debug('[GPRandomizer.Map.setPreset]', 'preset =>', preset);
  },

  generatePresetMap: function(players) {
    console.debug('[GPRandomizer.Map.generatePresetMap]', 'players =>', players);
  },

  generateRandomMap: function(players) {
    console.debug('[GPRandomizer.Map.generateRandomMap]', 'players =>', players);
  },

  resizeMapVerticalGridLength: function() {
    let map = document.getElementById(this.boardId);
    let unit = (map.clientWidth / 20) / 2;
    map.style.gridTemplateRows = (unit + 'px ').repeat(30);
    map.style.setProperty('-ms-grid-rows', (unit + 'px').repeat(30));
  }
};

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

  //
  // array shuffle method
  //
  function shuffle(list, preset) {
    if (preset && preset.length > 0) {
      return preset.map(function(value) {
        return list[value];
      });
    }
    let nlist = [].concat(list);
    var n = nlist.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = nlist[n];
      nlist[n] = nlist[i];
      nlist[i] = t;
    }
    return nlist;
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
    GPRandomizer.BoardState.federation = fed;
  }

  //
  // setup advanced Technology;
  //
  function setupAdvTech(args) {
    var preset = args ? args.split(',') : [];
    var advlist = shuffle(ADVANCEDTECHS, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="adv"]'),
      function(e, i) {
        e.setAttribute('src', advlist[i]);
        GPRandomizer.BoardState.advancedTechs.push(
          ADVANCEDTECHS.indexOf(advlist[i])
        );
      }
    );
  }

  //
  // setup basic Tech
  //
  function setupBasicTech(args) {
    var preset = args ? args.split(',') : []; 
    var baslist = shuffle(BASICTECHS, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="bas"]'),
      function(e, i) {
        e.setAttribute('src', baslist[i]);
        GPRandomizer.BoardState.basicTechs.push(
          BASICTECHS.indexOf(baslist[i])
        );
      }
    );
  }

  //
  // setup RoundScore
  //
  function setupRoundScore(args) {
    let preset = args ? args.split(',') : [];
    let rndlist = shuffle(ROUNDSCORES, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="rnd"]'),
      function(e, i) {
        e.setAttribute('src', rndlist[i]);
        GPRandomizer.BoardState.roundScores.push(
          ROUNDSCORES.indexOf(rndlist[i])
        );
      }
    );
  }

  //
  // setup FinalScore
  //
  function setupFinalScore(args) {
    let preset = args ? args.split(',') : [];
    let finlist = shuffle(FINALSCORES, preset);
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="fin"]'),
      function(e, i) {
        e.setAttribute('src', finlist[i]);
        GPRandomizer.BoardState.finalScores.push(
          FINALSCORES.indexOf(finlist[i])
        );
      }
    );
  }

  //
  // setup Booster
  //
  function setupBooster(args) {
    let preset = args ? args.split(',') : [];
    let boosterdiv = document.getElementById('booster');
    let players = Number(GPRandomizer.Menu.players());
    let rndBoosterNum = players + 3;
    let rndboosterlist = shuffle(ROUNDBOOSTERS, preset);
    boosterdiv.style.setProperty('grid-template-columns', "1fr ".repeat(rndBoosterNum));
    boosterdiv.style.setProperty('-ms-grid-columns', "1fr ".repeat(rndBoosterNum));
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-generator-type="boo"]'),
      function(e, i) {
        if (rndBoosterNum <= i) {
          e.parentElement.style.display = 'none';
          return true;
        }

        e.parentElement.style.setProperty('-ms-grid-column', i + 1);
        e.parentElement.style.display = 'block';
        e.parentElement.className = 'booster booster' + players + 'er';
        e.setAttribute('src', rndboosterlist[i]);
        GPRandomizer.BoardState.roundBoosters.push(
          ROUNDBOOSTERS.indexOf(rndboosterlist[i])
        );
      }
    );
  }

  //
  // add external css for map
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
  function generateRandomMap(players, preset) {
    addMapCss();
    GPRandomizer.Map.resizeMapVerticalGridLength();
    if (preset) {
      console.log(preset);
    }
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
  //
  //
  function parseHashbang(hashbang_str) {
    console.debug('[parseHashbang]', 'Start');

    var hashes = hashbang_str.slice(hashbang_str.indexOf('#!') + 2).split('&');
    var vars = {};

    for(var i = 0; i < hashes.length; i++) {
      var hash = hashes[i].split('=');

      if(hash.length > 1) {
        vars[hash[0]] = hash[1];
      } else {
        vars[hash[0]] = null;
      }
    }

    console.debug('[parseHashbang]', vars);
    return vars;
  }

  //
  // setup function
  //
  function setup(hashbang) {
    var args = {};
    if (hashbang == true && location.hash) {
      args = parseHashbang(location.hash);
    }

    if (args.PLAYERS) {
      GPRandomizer.Menu.players(args.PLAYERS);
    }
    GPRandomizer.BoardState.players = GPRandomizer.Menu.players();

    // setupFed
    setupFederation(args.FED);

    // setup advanced-tech
    setupAdvTech(args.ADV);

    // setup basic-tech
    setupBasicTech(args.BAS);

    // setup round-score
    setupRoundScore(args.RND);

    // setup final-score
    setupFinalScore(args.FIN);

    // setup round-booster
    setupBooster(args.BOO);

    if (args.MAP) {
      generateRandomMap(
        GPRandomizer.Menu.players(),
        args.MAP
      );
    }
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

  //
  //
  //
  document.getElementById('permalink').addEventListener('click', function() {
    console.debug(GPRandomizer.BoardState);
    let newUrl = location.origin + location.pathname + GPRandomizer.BoardState.toHashbangString();
    if (window.history) {
      window.history.pushState(null, null, newUrl);
    }
    (function() {
      let inputElement = document.createElement('pre');
      inputElement.style.display = 'inline-block';
      inputElement.style.width = 0;
      inputElement.style.height = 0;
      inputElement.innerText = newUrl;
      document.querySelector('div.header').appendChild(inputElement);
      let range = document.createRange();
      range.selectNode(inputElement);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      document.querySelector('div.header').removeChild(inputElement);
      alert('Copy permalink to clipboard');
    })();
  });

  //
  //
  //
  document.getElementById('mapGen').addEventListener('click', function() {
    generateRandomMap(GPRandomizer.Menu.players());
  });

  //
  //
  //
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
      GPRandomizer.Map.resizeMapVerticalGridLength();
    }, resizeWait);
  });

  setup(true);
});
