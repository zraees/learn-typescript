/*
    17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
    • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
    • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
    a message to that person letting them know you’re sorry you can’t invite them to dinner.
    • Print a message to each of the two people still on your list, letting them know they’re still invited.
    • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
    of your program.
*/

let guests: string[] = ["Amir", "Salman", "Faizan", "Danish"];
let new_guests: string[];

// removing guest, who is busy
new_guests = guests.filter((element) => { return element !== "Salman"});

// add new guest
new_guests.push("Ali");

new_guests.forEach(element => {
    console.log(`${element}, you're invited to having dinner at my place, I'm waiting for you with your family!`);
});

console.log('\nI found a bigger dinner table !!!\n');

// add new guest in start of list
new_guests.unshift("Azlan");

// add new guest in middle of list
new_guests.splice(3, 0, "Umar");

// add new guest in last of list
new_guests.push("Tayyab");

console.log('Guests of bigger table !!\n-------------------------');

new_guests.forEach(element => {
    console.log(`${element}, you're invited to having dinner at my place, I'm waiting for you with your family!`);
});

console.log('\nI can invite only two people for dinner !!!\n-------------------------------------------');

console.log(`I'm sorry I can’t invite ${new_guests.pop()} to dinner!`);
console.log(`I'm sorry I can’t invite ${new_guests.pop()} to dinner!`);
console.log(`I'm sorry I can’t invite ${new_guests.pop()} to dinner!`);
console.log(`I'm sorry I can’t invite ${new_guests.pop()} to dinner!`);
console.log(`I'm sorry I can’t invite ${new_guests.pop()} to dinner!`);

new_guests.forEach(element => {
    console.log(`${element}, you're still invited to having dinner!`);
});

new_guests.splice(0, new_guests.length);

console.log(`\nGuest list new empty`);
console.log(new_guests);