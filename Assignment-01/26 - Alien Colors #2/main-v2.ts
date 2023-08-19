import { Colors } from "./colors";

/*
    26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
    write an if-else chain.

    • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

    • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

    • Write one version of this program that runs the if block and another that runs the else block.
*/
// defined color enums
let alien_color : Colors = Colors.yellow; 
if (alien_color === Colors.yellow) 
    console.log('You earned 10 points');
else if (alien_color === Colors.green) 
    console.log('You earned 5 points');
else if (alien_color === Colors.red) 
    console.log('You earned 10 points');
else
    console.log('');