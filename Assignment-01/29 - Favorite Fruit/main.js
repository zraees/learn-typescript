/*
    29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
    • Make a array of your three favorite fruits and call it favorite_fruits.
    • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
    such as You really like bananas!
*/
var favorite_fruits = ['bananas', 'mangoes', 'apples'];
if (favorite_fruits.indexOf('bananas') > -1)
    console.log('You really like bananas!');
if (favorite_fruits.indexOf('pears') > -1)
    console.log('You really like pears!');
if (favorite_fruits.indexOf('oranges') > -1)
    console.log('You really like oranges!');
if (favorite_fruits.indexOf('apples') > -1)
    console.log('You really like apples!');
if (favorite_fruits.indexOf('mangoes') > -1)
    console.log('You really like mangoes!');
