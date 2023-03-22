// Generic types

const names: Array<string> = [];
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

// my own generic type & constraints (extends)

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: 'Maja' }, { age: 30 });
console.log(mergedObj.age);

// another generic function

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value.';
	if (element.length === 1) {
		descriptionText = 'Got 1 element.';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements.';
	}
	return [element, descriptionText];
}

console.log(countAndDescribe(['Cooking', 'Hiking']));

// keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Maja' }, 'name'));

// generic classes

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Maja');
textStorage.addItem('Wojtek');
textStorage.removeItem('Maja');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// Generic Utility Types
// Partial
interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

// Readonly

const names2: Readonly<string[]> = ['Anna', 'Wojtek'];
// names2.push('Manu')
