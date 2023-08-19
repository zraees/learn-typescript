/*
    24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

        • Tests for equality and inequality with strings

        • Tests using the lower case function

        • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

        • Tests using "and" and "or" operators

        • Test whether an item is in a array

        • Test whether an item is not in a array
*/
let str : string = "Pakistan";
let num : number = 100;
let continent : string = "Asia";
let arr : number[] = [11,22,33,44,55];

console.log(`Tests for equality and inequality with strings: "Pakistan" and "India" are equal`, str === "India");
console.log(`Tests using the lower case function: "Pakistan" and "pakistan" are equal`, str === "pakistan");

console.log('\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
console.log('100 and 99 are equal', num === 99);
console.log('100 and 99 are not-equal', num !== 99);
console.log('100 is greater than 99', num > 99);
console.log('100 is less than 99', num < 99);  
console.log('100 is greater than or equal to 99', num >= 99);
console.log('100 is less than or equal to 99', num <= 99);  

console.log('\nTests using "and" and "or" operators');
console.log('Pakistan === Pakistan AND Continent === Asia', str === "Pakistan" && continent === "Asia");
console.log('Pakistan === Pakistan OR Pakistan === pakistan', str === "Pakistan" || str === "pakistan");

console.log('\nTest whether an item is in a array or not');
console.log('check "23" is in array', arr.indexOf(23)>-1?true:false);
console.log('check "33" is in array', arr.indexOf(33)>-1?true:false);