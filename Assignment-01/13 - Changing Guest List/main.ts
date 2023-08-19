/*
    15. Changing Guest List: You just heard that one of your guests can’t make the
    dinner, so you need to send out a new set of invitations. You’ll have to think of
    someone else to invite.
    • Start with your program from Exercise 14. Add a print statement at the
    end of your program stating the name of the guest who can’t make it.
    • Modify your list, replacing the name of the guest who can’t make it with
    the name of the new person you are inviting.
    • Print a second set of invitation messages, one for each person who is still
    in your list.
*/

let guests: string[] = ["Amir", "Salman", "Faizan"];
let new_guests: string[];

// removing guest, who is busy
new_guests = guests.filter((element) => { return element !== "Salman"});

// add new guest
new_guests.push("Ali");

new_guests.forEach(element => {
    console.log(`${element}, you're invited to having dinner at my place, I'm waiting for you with your family!`);
});

