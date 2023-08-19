/* 
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let places : string [] = ["Makkah", "Paris", "Madinah", "Finland", "Taj Mahal"]; 

let desc = (a:string, b:string) => {return a>b?-1:(a<b?1:0)}; // define desc func to use in sorting

console.log('array in its original order, ', places);
console.log('array in alphabetical order without modifying the actual list, ', places.slice().sort());

console.log('\narray in its original order, ', places);
console.log('array in reverse alphabetical order without modifying the actual list, ', 
    places.slice().sort(desc));

console.log('\narray in its original order, ', places);
places.reverse();
console.log('reverse order, ', places);
places.reverse();
console.log('reverse again to back to its original order, ', places);

// sort and effect original array
places.sort();
console.log('\nsorted original array, ', places);

// reverse alphabetical sort and effect original array
places.sort(desc);
console.log('reverse alphabetical sorted original array, ', places);
