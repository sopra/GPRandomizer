/*
 * Copyright (c) 2014 Yahoo Japan Corporation. All rights reserved.
 */

// vim: fenc=utf-8 et ts=4 sts=4 sw=4
var rework    = require('rework'),
    pureGrids = require('rework-pure-grids');

var css = rework('').use(pureGrids.units(7, {
    mediaQueries: {
        sm : 'screen and (min-width: 35.5em)',
        md : 'screen and (min-width: 48em)',
        lg : 'screen and (min-width: 64em)',
        xl : 'screen and (min-width: 80em)'
    }
})).toString();

console.log(css);
