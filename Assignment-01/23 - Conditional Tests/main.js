/*
    23. Conditional Tests: Write a series of conditional tests. Print a statement
    describing each test and your prediction for the results of each test. Your code
    should look something like this:

    let car = 'subaru';

    console.log("Is car == 'subaru'? I predict True.")

    console.log(car == 'subaru')

    • Look closely at your results, and make sure you understand why each line evaluates to True or False.

    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("/nFive 'True' conditions\n");
// Test # 1 : true 
var make = 'toyota';
console.log("Is make == 'toyota'? I predict True.");
console.log(make == 'toyota');
// Test # 2 : true 
var model = 'camry';
console.log("Is model == 'camry'? I predict True.");
console.log(model == 'camry');
// Test # 3 : true 
var car_year = '2023';
console.log("Is car_year == '2023'? I predict True.");
console.log(car_year == '2023');
// Test # 4 : true 
var car_transmission = 'Auto';
console.log("Is car_transmission == 'Auto'? I predict True.");
console.log(car_transmission == 'Auto');
// Test # 5 : true 
var car_color = 'White';
console.log("Is car_color == 'White'? I predict True.");
console.log(car_color == 'White');
console.log("/nFive 'False' conditions\n");
// Test # 1 : false 
make = 'toyota 1';
console.log("Is make == 'toyota'? I predict False.");
console.log(make == 'toyota');
// Test # 2 : false 
model = 'camry 1';
console.log("Is model == 'camry'? I predict False.");
console.log(model == 'camry');
// Test # 3 : false 
car_year = '2021';
console.log("Is car_year == '2023'? I predict False.");
console.log(car_year == '2023');
// Test # 4 : false 
car_transmission = 'Manual';
console.log("Is car_transmission == 'Auto'? I predict False.");
console.log(car_transmission == 'Auto');
// Test # 5 : false 
car_color = 'Black';
console.log("Is car_color == 'White'? I predict False.");
console.log(car_color == 'White');
