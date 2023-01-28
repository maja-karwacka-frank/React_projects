// Primitives: number, string, boolean, null, undefined
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 24;
var userName = 'Maja';
var isProgrammer = true;
// More complex types
var hobbies = ['reading', 'tennis'];
var person = {
    name: 'Maja',
    age: 18
};
// tablica obiektów
var people;
// union types
var course = 'react';
course = 1234;
var person2;
var person3;
// Generics
function insertAtBegining(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBegining(demoArray, -1);
