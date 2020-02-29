/*jshint esversion: 6 */
// const add = require('./utils.js');
// const sum = add(2,3)
// console.log(sum);

// import "validator" ;
// var validator = validator()
const validator = require('validator');
const notes = require('./notes.js');

var myString ;
myString = "Hello and I want to see it to be printed";

notes(myString);

console.log(validator.isEmail('andrew@example.com'));