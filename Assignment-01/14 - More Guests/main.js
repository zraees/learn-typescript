var guests = ["Amir", "Salman", "Faizan", "Danish"];
var new_guests;
// removing guest, who is busy
new_guests = guests.filter(function (element) { return element !== "Salman"; });
// add new guest
new_guests.push("Ali");
new_guests.forEach(function (element) {
    console.log("".concat(element, ", you're invited to having dinner at my place, I'm waiting for you with your family!"));
});
console.log('\nI found a bigger dinner table !!!\n');
// add new guest in start of list
new_guests.unshift("Azlan");
// add new guest in middle of list
new_guests.splice(3, 0, "Umar");
// add new guest in last of list
new_guests.push("Tayyab");
console.log('Guests of bigger table !!\n-------------------------');
new_guests.forEach(function (element) {
    console.log("".concat(element, ", you're invited to having dinner at my place, I'm waiting for you with your family!"));
});
