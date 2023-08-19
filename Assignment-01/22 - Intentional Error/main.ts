/*
    22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
    to produce an index error. Make sure you correct the error before closing the program.
*/

let arr : number[] = [23, 1, 5, 6, 9, 0, 7];

console.log('Intentional error: ', arr[11]);  // no item exist in arr at index 11, so there is exception 

console.log('Item exists on index 3 => ', arr[3]);

