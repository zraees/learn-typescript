/*
    16. More Guests: You just found a bigger dinner table, so now more space is
    available. Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
    bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array.
    • Use append() to add one new guest to the end of your list.
    • Print a new set of invitation messages, one for each person in your list.
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
