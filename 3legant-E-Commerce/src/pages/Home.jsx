import React, { useState, useEffect } from "react";
import {
	NotificationBar,
	Nav,
	Slider,
	Header,
	BannerGrid,
	ProductCarousel,
	Values,
	Banner,
	Blog,
	Newsletter,
	Footer,
} from "../components";

const Home = () => {
	const [loggedInUser, setLoggedInUser] = useState('');

	useEffect(() => {
		localStorage.getItem('loggedInUser') && setLoggedInUser(localStorage.getItem('loggedInUser'));
	},[]);

	return (
		<>
			<NotificationBar />
			<Nav loggedInUser={loggedInUser} />

			<Slider />

			<Header />

			<BannerGrid />

			<ProductCarousel />

			<Values />

			<Banner />

			<Blog />

			<Newsletter />

			<Footer />

		</>
	);
};

export default Home;
