import React from "react";

import "./hero.scss";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__image">
				<img src="./hero.png" alt="Hero Image" />
			</div>
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind
				hosts—all without leaving home.
			</p>
		</section>
	);
};

export default Hero;
