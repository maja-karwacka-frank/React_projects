import { useState } from 'react';
import { Output } from './Output';

export const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2>Hello!</h2>
			{!changedText && <Output>It's good to see you!</Output>}
			{changedText && <Output>Changed!</Output>}
			<button onClick={changeTextHandler}>Change Text!</button>
		</div>
	);
};
