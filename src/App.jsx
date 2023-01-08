import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/hero/Hero";
import Card from "./components/Card/Card";
import cardData from "./data";

import "./scss/main.scss";

function App() {
	const cardsList = cardData.map((card) => {
		return <Card key={card.id} {...card} />;
	});

	return (
		<div className="App">
			<div className="card card--main br-lg">
				<NavBar />
				<Hero />
				<section className="card-wrapper">{cardsList}</section>
			</div>
		</div>
	);
}

export default App;
