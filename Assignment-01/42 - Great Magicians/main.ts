/*
    42. Great Magicians: Start with a copy of your program from Exercise 39.
    Write a function called make_great() that modifies the array of magicians by adding
    the phrase the Great to each magician’s name. Call show_magicians() to
    see that the list has actually been modified.
*/

let magicians_name : string[] = ["Magician1", 'Magician2', 'Magician3'];
make_great(magicians_name);
show_magicians(magicians_name);

function show_magicians(magicians_name : string[]) {
    magicians_name.forEach((Ele: string) => console.log(Ele))
}

function make_great(magicians_name : string[]) {
    magicians_name.forEach((Ele: string, index: number, arr) => arr[index] = 'Great ' + Ele)
}