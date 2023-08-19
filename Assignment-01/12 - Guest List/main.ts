/*
    14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
    invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

let guests: string[] = ["Amir", "Salman", "Faizan"];
guests.forEach(element => {
    console.log(`${element}, you're invited to having dinner at my place, I'm waiting for you with your family!`);
});