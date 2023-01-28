// Primitives: number, string, boolean, null, undefined
// More complex types: arrays, objects
// Function types, parameters

let age: number = 24;

let userName: string = 'Maja';

let isProgrammer: boolean = true;

// More complex types

let hobbies: string[] = ['reading', 'tennis'];

let person: {
	name: string;
	age: number;
} = {
	name: 'Maja',
	age: 18,
};

// tablica obiektów
let people: {
	name: string;
	age: number;
}[];

// union types

let course: string | number = 'react';

course = 1234;

// type alias

type Person = {
	name: string;
	age: number;
};

let person2: Person;
let person3: Person[];


// Generics

function insertAtBegining<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1)
