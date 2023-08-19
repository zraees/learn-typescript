"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
/*
    26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
    write an if-else chain.

    • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

    • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

    • Write one version of this program that runs the if block and another that runs the else block.
*/
// defined color enums
var alien_color = colors_1.Colors.yellow;
if (alien_color === colors_1.Colors.yellow)
    console.log('You earned 10 points');
else if (alien_color === colors_1.Colors.green)
    console.log('You earned 5 points');
else if (alien_color === colors_1.Colors.red)
    console.log('You earned 10 points');
else
    console.log('');
