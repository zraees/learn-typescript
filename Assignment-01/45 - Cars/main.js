var cars = [];
cars.push(make_car('Toyota', 'Corolla', { name: "color", value: "white" }, { name: "weight", value: "770" }));
//cars.push(make_car('Toyota', 'Camry'));
cars.forEach(function (Ele) { return console.log(Ele); });
function make_car(manufacturer_name, model_name) {
    var keywords = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keywords[_i - 2] = arguments[_i];
    }
    return { manufacturer_name: manufacturer_name, model_name: model_name, keywords: keywords };
}
