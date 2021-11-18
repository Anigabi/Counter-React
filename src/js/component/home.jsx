import React, { Fragment } from "react";
import Counter from "./cronometro.jsx";
const Home = () => {
	return (
		<Fragment>
			<div className="box-counter">
				<Counter start={0} time={500000} />
				<Counter start={0} time={50000} />
				<Counter start={0} time={5000} />
				<Counter start={0} time={500} />
			</div>
			<div className="title">
				<h1>Counter</h1>
			</div>
		</Fragment>
	);
};

export default Home;
