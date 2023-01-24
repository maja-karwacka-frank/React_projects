import React, { useState, useEffect, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { AuthContext } from '../../store/auth-context';
import { Input } from '../UI/Input/Input';

// const emailReducer = (state, action) => {
// 	return { value: '', isValid: false };
// };

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	// const [emailState, dispatchEmail] = useReducer(emailReducer, {
	// 	value: '',
	// 	isValid: false,
	// });

	const authCtx = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(
				enteredEmail.includes('@') && enteredPassword.trim().length > 6
			);
		}, 500);

		return () => {
			clearInterval(identifier);
		};
	}, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes('@'));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(enteredEmail, enteredPassword);
		} else if (!emailIsValid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id='email'
					label='E-mail'
					type='email'
					isValid={emailIsValid}
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id='password'
					label='Password'
					tyle='password'
					isValid={passwordIsValid}
					value={enteredPassword}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
