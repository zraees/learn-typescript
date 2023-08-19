"use strict";
/*
    27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
    • If the alien is green, print a message that the player earned 5 points.
    • If the alien is yellow, print a message that the player earned 10 points.
    • If the alien is red, print a message that the player earned 15 points.
    • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
// defined color enums 
var alien_color = colors_1.Colors.green;
// version 1
console.log('Version #1 alien_color is green\t', versions(alien_color));
//version 2
alien_color = colors_1.Colors.yellow;
console.log('Version #2 alien_color is yellow\t', versions(alien_color));
//version 3
alien_color = colors_1.Colors.red;
console.log('Version #1 alien_color is red\t', versions(alien_color));
function versions(color) {
    if (alien_color === colors_1.Colors.green)
        return 'You earned 5 points';
    else if (alien_color === colors_1.Colors.yellow)
        return 'You earned 10 points';
    else if (alien_color === colors_1.Colors.red)
        return 'You earned 15 points';
    else
        return '';
}
