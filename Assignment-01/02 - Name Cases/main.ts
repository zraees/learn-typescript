/*
    3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let person_name : string = "I am proud pakistani.";
const titleCase = (person_name : string) => 
    person_name.split(' ').map( (Ele : string) => Ele[0].toUpperCase() + Ele.substr(1) ).join(" ");

console.log(`In lowercase ${person_name.toLowerCase()}`);
console.log(`In uppercase ${person_name.toUpperCase()}`);
console.log(`In titlecase ${titleCase(person_name)}`);