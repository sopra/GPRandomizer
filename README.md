# GaiaProject Setup Randomzier

Randomizer to setup [GaiaProject](https://boardgamegeek.com/boardgame/220308/gaia-project).

## Usage

Access to https://sopra.github.io/GPRandomizer/

Choose Player number and click "setup" button.

If you want to share board, click "hide" button and capture screenshot.

(and board shows again if you click board.)

## Permalink Parameter Spec

variable | value type | sample value | value spec | description
---|---|---|---|---
PLAYERS | integer | 4 | 2-4 | Player number.
FED | integer | 0 | 0-6 | Federation Tile index.
ADV | integers (comma separated) | 0,1,2,3,4,5 | 0-14 | Advanced Technology Tile.  Order is left to right.(from Terraforming Tech to Science Tech)
BAS | integers (comma separated) | 0,1,2,3,4,5,6,7,8 | 0-8 | Basic Technology Tile.  Order is left to right (from Terraforming Tech to Science Tech).  last 3 number is Free Technology.
RND | integers (comma separated) | 0,1,2,3,4,5 | 0-9 | Round Tile.  Order is left to right (Round 1 to Round 6).
FIN | integers (comma separated) | 0,1 | 0-5 | Final Score Tile.
BOO | integers (comma separated) | 0,1,2,3,4,5 | 0-9 | Round Booster Tile. if 2 players, you have to input at least 5 values. Ofcourse if 4 players, you have to input at least 7 values. It is ignored the number over range.
MAP | | | | Under Construction.

## Copyright

Design and Images.
(c) [Lenrok](https://boardgamegeek.com/filepage/157134/gaia-project-setup-randomizer-gprandomizer)

Randomizer scripts.
(c) [sopra](https://github.com/sopra/)
