var greeting1 = require('./greeting.js');
console.log(`Hello ${greeting1.name}`); //Hello Alice

var greeting2 = require('./greeting.js');
greeting2.name = 'name';
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);