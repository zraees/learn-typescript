/*
    43. Unchanged Magicians: Start with your work from Exercise 40. Call the
    function make_great() with a copy of the array of magicians’ names. Because the
    original array will be unchanged, return the new array and store it in a separate array.
    Call show_magicians() with each array to show that you have one array of the original
    names and one array with the Great added to each magician’s name.
*/
var magicians_name = ["Magician1", 'Magician2', 'Magician3'];
magicians_name = make_great(magicians_name);
show_magicians(magicians_name);
function show_magicians(magicians_name) {
    magicians_name.forEach(function (Ele) { return console.log(Ele); });
}
function make_great(magicians_name) {
    return magicians_name.map(function (name) { return 'Great ' + name; });
}
