var guests = ["Amir", "Salman", "Faizan"];
var new_guests;
// removing guest, who is busy
new_guests = guests.filter(function (element) { return element !== "Salman"; });
// add new guest
new_guests.push("Ali");
new_guests.forEach(function (element) {
    console.log("".concat(element, ", you're invited to having dinner at my place, I'm waiting for you with your family!"));
});
juicer();
juicer();
juicer();
juicer();
function juicer() {
    console.log('jug');
    console.log('sugar');
    console.log('milk');
    console.log('mango');
}
