const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Maja',
	age: 18,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'], // tuples/krotka, tablica 2 elementowa, 1el jest numeryczny, 2el jest opisem lub identyfikatorem
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

enum Role {
	Admin,
	Read_only,
	AUTHOR,
}

const person2 = {
	role: Role.Admin,
};
