var person_name = "I am proud pakistani.";
var newName = person_name.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log(newName);
var titleCase = function (person_name) {
    return person_name.split(' ').map(function (Ele) { return Ele[0].toUpperCase() + Ele.substr(1); }).join(" ");
};
console.log("In lowercase ".concat(person_name.toLowerCase()));
console.log("In uppercase ".concat(person_name.toUpperCase()));
console.log("In titlecase ".concat(titleCase(person_name)));
