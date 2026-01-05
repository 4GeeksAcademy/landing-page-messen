import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer"
import { Card } from "./Card";



//create your first component
const Home = () => {

	return (
		< div className="d-flex flex-column">
			<Navbar />

			<main className="flex-fill">
				<div className="container my-4">
					<Jumbotron />
					<div className="row mt-5">
						<div className="col-md-3">
							<Card />
						</div>
						<div className="col-md-3">
							<Card />
						</div>
						<div className="col-md-3">
							<Card />
						</div>
						<div className="col-md-3">
							<Card />
						</div>
					</div>

				</div>
			</main>

			<div className="mt-5">
				<Footer />
			</div>

		</div>
	);

};

export default Home;