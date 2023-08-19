/*
    27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
    • If the alien is green, print a message that the player earned 5 points.
    • If the alien is yellow, print a message that the player earned 10 points.
    • If the alien is red, print a message that the player earned 15 points.
    • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

import { Colors } from "./colors";

// defined color enums 
let alien_color : Colors = Colors.green; 

// version 1
console.log('Version #1 alien_color is green\t', versions(alien_color));

//version 2
alien_color = Colors.yellow; 
console.log('Version #2 alien_color is yellow\t', versions(alien_color));

//version 3
alien_color = Colors.red; 
console.log('Version #3 alien_color is red\t', versions(alien_color));

function versions(color: Colors)    {
    if (alien_color === Colors.green) 
        return 'You earned 5 points';
    else if (alien_color === Colors.yellow) 
        return 'You earned 10 points';
    else if (alien_color === Colors.red) 
        return 'You earned 15 points';
    else
        return '';
}