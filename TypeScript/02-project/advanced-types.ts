type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Maja',
	privileges: ['create-server'],
	startDate: new Date(),
};

// intersection
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guards
// typeof

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add('banana', 'orange');
result.split(' ');

// Optional Chaining - jeśli coś istnieje ?

const fetchedUserData = {
	id: 'u1',
	name: 'Max',
	job: { title: 'CEO', description: 'My own company' },
};
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing - kiedy nie wiemy czy coś jest nullish lub undefined używamy ??

const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

// 'key' in emp
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name);
	if ('privileges' in emp) {
		// czy właściwość istnieje w emp
		console.log('Privileges: ' + emp.privileges);
	}
	if ('startDate' in emp) {
		console.log('Start Date: ' + emp.startDate);
	}
}

printEmployeeInformation(e1);

// instanceof - if some obj is base on some class
class Car {
	drive() {
		console.log('Driving...');
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...');
	}

	loadCargo(amount: number) {
		console.log('Loading cargo ...' + amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions: 'type' - 1 wspólna właściwość w każdym obiekcie

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runninSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runninSpeed;
	}
	console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting

// const userInputElement = <HTMLInputElement>(
// 	document.getElementById('user-input')
// );
const userInputElement = document.getElementById(
	'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi there!';

// bez wykrzyknika ! musimy dać if:
// const userInputElement = (
// 	document.getElementById('user-input')
// )

// if (userInputElement) {
// 	(userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// Index properties - nie musimy znać z góry nazw i ilości właściwości

interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email!',
	username: 'Must start with a capital character!',
};
