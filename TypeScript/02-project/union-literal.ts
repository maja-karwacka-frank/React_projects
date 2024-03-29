//union types

const combine = (
	input1: number | string,
	input2: number | string,
	resultConversion: 'as-number' | 'as-text' // literal types
) => {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
};

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Maja', 'Wojtek', 'as-text');
console.log(combinedNames);
