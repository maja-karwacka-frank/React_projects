import mealsImage from '../../assets/platter.jpg';
import { HeaderCartButton } from './HeaderCartButton';
import classes from './Header.module.css';

export const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!' />
			</div>
		</>
	);
};
