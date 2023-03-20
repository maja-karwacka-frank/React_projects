let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Maja';
if (typeof userInput === 'string') {
	userName = userInput;
}

// never - nigdy nic nie zwraca
const generateError = (message: string, code: number): never => {
	throw { message: message, errorCode: code };
};

generateError('An error ocurred!', 500);
