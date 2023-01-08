import React from "react";

import "./card.scss";

const Card = (props) => {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="card br-sm">
			<div className="card__image">
				<img src={`./${props.coverImg}`} alt="Image Name" />
				{badgeText && <div className="badge">{badgeText}</div>}
			</div>
			<div className="card__info">
				<div className="info">
					<img src="./star.png" alt="" />
					<div className="rating">{props.stats.rating}</div>
					<div className="count">({props.stats.reviewCount}) •</div>
					<div className="place">{props.location}</div>
				</div>
			</div>
			<div className="card__title">{props.title}</div>
			<div className="card__price">
				<strong>From ${props.price}</strong> / person
			</div>
		</div>
	);
};

export default Card;
