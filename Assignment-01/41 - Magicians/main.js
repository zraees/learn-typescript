/*
    41. Magicians: Make a array of magician’s names. Pass the array to a function
    called show_magicians(), which prints the name of each magician in the array.
*/
var magicians_name = ["Magician1", 'Magician2', 'Magician3'];
show_magicians(magicians_name);
function show_magicians(magicians_name) {
    magicians_name.forEach(function (Ele) { return console.log(Ele); });
}
