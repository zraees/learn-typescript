/*
    45. Cars: Write a function that stores information about a car in a Object.
    The function should always receive a manufacturer and a model name. It
    should then accept an arbitrary number of keyword arguments. Call the function
    with the required information and two other name-value pairs, such as a
    color or an optional feature. 
    Print the Object that’s returned to make sure all the information was
    stored correctly.
*/
type features = {name:string, value:string};
let cars : any[] = [];
cars.push(make_car('Toyota', 'Corolla', { name: "color", value: "white" }, { name: "weight", value: "770" }));
//cars.push(make_car('Toyota', 'Camry'));

cars.forEach((Ele) => console.log(Ele))

function make_car(manufacturer_name: string, model_name: string, ...keywords: features[]) : any {
    return {manufacturer_name: manufacturer_name, model_name: 
        model_name, keywords:keywords};
}