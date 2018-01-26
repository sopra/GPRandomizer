// vim: fenc=utf-8 et ts=4 sts=4 sw=4
$(window).on("load", function() {
  var doc = document;

  const FEDERATIONS = [
    "pic/FEDcre.png",
    //    "pic/FEDgle.png",
    "pic/FEDknw.png",
    "pic/FEDore.png",
    "pic/FEDpwt.png",
    "pic/FEDqic.png",
    "pic/FEDvps.png"
  ];

  const ROUNDSCORES = [
    "pic/RNDfed.png",
    "pic/RNDgai3.png",
    "pic/RNDgai4.png",
    "pic/RNDmin.png",
    "pic/RNDpia.png",
    "pic/RNDstp.png",
    "pic/RNDter.png",
    "pic/RNDtrs3.png",
    "pic/RNDtrs4.png"
  ];

  const BASICTECHS = [
    "pic/TECcre.png",
    "pic/TECgai.png",
    "pic/TECknw.png",
    "pic/TECore.png",
    "pic/TECpia.png",
    "pic/TECpow.png",
    "pic/TECqic.png",
    "pic/TECtyp.png",
    "pic/TECvps.png"
  ];

  const ADVANCEDTECHS = [
    "pic/ADVfedP.png",
    "pic/ADVfedV.png",
    "pic/ADVgai.png",
    "pic/ADVknw.png",
    "pic/ADVlab.png",
    "pic/ADVminB.png",
    "pic/ADVminV.png",
    "pic/ADVore.png",
    "pic/ADVqic.png",
    "pic/ADVsecO.png",
    "pic/ADVsecV.png",
    "pic/ADVstp.png",
    "pic/ADVtrsB.png",
    "pic/ADVtrsV.png",
    "pic/ADVtyp.png"
  ];

  const ROUNDBOOSTERS = [
    "pic/BOOgai.png",
    "pic/BOOknw.png",
    "pic/BOOlab.png",
    "pic/BOOmin.png",
    "pic/BOOnav.png",
    "pic/BOOpia.png",
    "pic/BOOpwt.png",
    "pic/BOOqic.png",
    "pic/BOOter.png",
    "pic/BOOtrs.png"
  ];

  const FINALSCORES = [
    "pic/FINbld.png",
    "pic/FINfed.png",
    "pic/FINgai.png",
    "pic/FINsat.png",
    "pic/FINsec.png",
    "pic/FINtyp.png"
  ];

  const ADVTECH_NUM = 6;
  const BASTECH_NUM = 9;
  const ROUND_NUM = 6;
  const FINAL_NUM = 2;

  // array shuffle method
  const shuffle = function (array) {
    var n = array.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  };

  //
  // setup federation;
  //
  var setupFederation = function(arg) {
    var fed = 0;
    if (!arg) {
      fed = Math.floor(Math.random() * FEDERATIONS.length);
    } else {
      fed = arg;
    }

    $('img#FED').attr('src', FEDERATIONS[fed]);
  };

  //
  // setup advanced Technology;
  //
  var setupAdvTech = function(args) {
    var advlist = shuffle(ADVANCEDTECHS);
    for (i = 0; i < ADVTECH_NUM; i++) {
      $('img#ADV' + i).attr('src', advlist[i]);
    }
  };

  //
  // setup basic Tech
  //
  var setupBasicTech = function(args) {
    var baslist = shuffle(BASICTECHS);
    for (i = 0; i < BASTECH_NUM; i++) {
      $('img#BAS' + i).attr('src', baslist[i]);
    }
  };

  //
  //
  //
  var parseHashbang = function(hashbang_str) {
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
  var setupRoundScore = function(args) {
  }

  //
  // setup function
  //
  var setup = function (hashbang) {

    var args = {};
    if (hashbang == true) {
      (function () {
        const aURL = window.location.href;
        if (aURL.indexOf('#!') >= 0) {
          args = parseHashbang(aURL.slice(aURL.indexOf('#!') + 2));
          console.log(args);
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
    var rndlist = shuffle(ROUNDSCORES);
    for (i = 0; i < ROUND_NUM; i++) {
      $('img#RND' + i).attr('src', rndlist[i]);
    }

    // setup final-score
    var finlist = shuffle(FINALSCORES);
    for (i = 0; i < FINAL_NUM; i++) {
      $('img#FIN' + i).attr('src', finlist[i]);
    }

    // setup round-booster
    var boosterdiv = $('div#booster');
    var players = $("select#pNumbers").val();
    var rndBoosterNum = Number(players) + 3;
    var rndboosterlist = shuffle(ROUNDBOOSTERS);
    var booster = boosterdiv.empty();
    var blist = "";
    for (i = 0; i < rndBoosterNum; i++) {
      blist += '<div class="booster pure-u-1-' + rndBoosterNum + '">';
      blist += '<div style="padding: 1vw;">';
      blist += '<img class="pure-img" src="' + rndboosterlist[i] + '">';
      blist += '</div>';
      blist += '</div>';
    }
    boosterdiv.html(blist);
  };

  $('button#setup').on('click', function() {
    setup();
  });

  //
  // capture ボタン準備
  //
  $('button#capture').on('click', function(event) {
    var board = $('#GPBoard')[0];
    html2canvas(board).then(function(canvas) {
      var data = canvas.toDataURL();
      $('#forClipboard').html('<img class="pure-img" src=' + data);
      $('#forClipboard').css('display', 'block');

      var range = document.createRange();
      range.selectNode( $('#forClipboard > img')[0] );
      window.getSelection().addRange(range);
      doc.execCommand('copy');
      $('#forClipboard').css('display', 'none');
    });
  });

  setup(true);

  //
  //
  //
  var fixsize = function() {
    for (var i = 6; i < 9; i++) {
      $('img#BAS'+i).height(
        $('img#BAS0').height()
      );
    }
  };

  fixsize();

  //
  // resize時の画像縮小
  //
  $(window).on('resize', function(event) {
    fixsize();
  });

});
