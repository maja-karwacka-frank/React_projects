import Image from 'next/legacy/image';
import classes from './hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/mietek.webp'
					width={300}
					height={300}
					alt='An image showing Miecio'
					priority
				/>
			</div>
			<h1>Hi, I'm Miecio</h1>
			<p>
				I blog about web development - especially frontend framework like React.
			</p>
		</section>
	);
};

export default Hero;
