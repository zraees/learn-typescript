/*
    44. Sandwiches: Write a function that accepts a array of items a person wants
    on a sandwich. The function should have one parameter that collects as many
    items as the function call provides, and it should print a summary of the sandwich
    that is being ordered. Call the function three times, using a different number
    of arguments each time.
*/
make_sandwich('bread', 'sauce', 'spice', 'butter');
make_sandwich('brown bread', 'ketchup', 'sweat');
make_sandwich('cucumber', 'ketchup', 'potato', 'tomato', 'onion');
function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log(ingredients);
}
