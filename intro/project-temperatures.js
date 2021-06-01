// declared a constant variable called kelvin with 293 as its value
const kelvin = 0;

// declared a variable called celsius which converts kelvin to celcius
let celsius = kelvin - 273;

// farenheit variable convert celsius to farenheit
let farenheit = celsius * (9/5) + 32;

//rounds farenheit number
farenheit = Math.floor(farenheit);

//logs in console farenheit variable with string interpolation
console.log(`The temperature is ${farenheit} degrees Farenheit`);

//variable newton converts celsius to newton scale
let newton = Math.floor(celsius * (33/100));
//logs temperature in newton scale
console.log(`The temperature is ${newton} degrees Newton.`);



