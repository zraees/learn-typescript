/*
    37. Large Shirts: Modify the make_shirt() function so that shirts are large
    by default with a message that reads I love TypeScript. Make a large shirt and a
    medium shirt with the default message, and a shirt of any size with a different
    message.
*/
function make_shirt(size, message) {
    if (message === void 0) { message = 'I love TypeScript'; }
    //console.log((size.toLowerCase() === 'large' || size.toLowerCase() === 'medium') ? 'I love TypeScript': message);
    console.log("Size is \"".concat(size, "\", message is \"").concat(message, "\""));
}
make_shirt('small', 'Hello World!');
make_shirt('large');
make_shirt('medium');
make_shirt('xl', "This is it!");
