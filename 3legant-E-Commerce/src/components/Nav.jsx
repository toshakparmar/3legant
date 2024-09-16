import React, { useState } from "react";
import Logo from "./Logo";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import {
	menu,
	line,
	heart,
	shoppingBag,
	userCircle,
	search,
	instagramB,
	facebookB,
	youtubeB,
	login,
	logout,
} from "../assets";
import { NavLink, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Nav = ({loggedInUser}) => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const handleSignOut = (e) => {
		localStorage.removeItem("loggedInUser");
		localStorage.removeItem("token");
		handleSuccess("User Logged Out");
		setTimeout(() => {
			navigate("/3legant-e-commerce/sign-in");
		}, 1000);
	};

	return (
		<>
			<nav className="sticky z-40 bg-white h-[60px] flex justify-between items-center mx-8 2xl:mx-60">
				<div
					className={`fixed top-0 left-0 w-full h-full max-md:bg-black max-md:bg-opacity-50 ${
						isMenuOpen ? "" : "hidden"
					}`}
					onClick={() => setIsMenuOpen(false)}
				/>
				<div className="flex">
					<img
						src={menu}
						alt="menu"
						className="mr-1 md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
					<Logo />
				</div>

				<div
					className={`flex flex-col absolute top-0 -left-8 bg-white py-6 px-6 text-chinese-black font-inter text-sm font-medium md:hidden`}
					style={{
						transform: isMenuOpen ? "translateX(0)" : "translateX(-110%)",
						transition: "transform 0.3s ease-in-out",
					}}
				>
					<img
						src={line}
						alt="close"
						className="w-6 absolute right-0 mr-6"
						onClick={() => setIsMenuOpen(false)}
					/>

					<Logo />

					<div className="flex border rounded-md border-nickel mt-4">
						<img src={search} alt="search" className="w-6 ml-4" />
						<input
							type="text"
							name="search"
							placeholder="Search"
							className="w-3/4 border-transparent focus:border-transparent focus:ring-0"
						/>
					</div>

					<NavLink to="/3legant-e-commerce/home" className="py-4 border-b border-bright-gray" activeClassName="active">
						Home
					</NavLink>

					<NavLink to="/3legant-e-commerce/shop" className="py-4 border-b border-bright-gray" 
					activeClassName="active">
						Shop
					</NavLink>

					<NavLink to="/3legant-e-commerce/product" className="py-4 border-b border-bright-gray"
					activeClassName="active">
						Product
					</NavLink>

					<NavLink to="/3legant-e-commerce/contact" className="py-4 border-b border-bright-gray"
					activeClassName="active">
						Contact Us
					</NavLink>

					<div className="flex justify-between mt-40 py-4 border-b border-bright-gray">
						<p>Cart</p>

						<div className="flex items-center ">
							<img src={shoppingBag} alt="shopping bag" className="mr-1" />
							<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
								2
							</div>
						</div>
					</div>

					<div className="flex justify-between py-4 border-b border-bright-gray">
						<p>Wishlist</p>

						<div className="flex items-center ">
							<img src={heart} alt="heart" className="mr-1" />
							<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
								2
							</div>
						</div>
					</div>

					<NavLink
						to="/3legant-e-commerce/sign-in"
						className="w-full h-12 mt-8 mb-10 flex justify-center items-center rounded-lg bg-primary text-white font-inter font-base font-semibold"
					>
						Sign In
					</NavLink>

					<div className="flex items-center">
						<img src={instagramB} alt="instagram" className="cursor-pointer" />
						<img
							src={facebookB}
							alt="facebook"
							className="cursor-pointer mx-4"
						/>
						<img src={youtubeB} alt="youtube" className="cursor-pointer" />
					</div>
				</div>

				<div className="text-nickel font-space-grotesk text-sm font-medium hidden md:block">
					<NavLink to="/3legant-e-commerce/home" className="mr-10"
					activeClassName="active">
						Home
					</NavLink>

					<NavLink to="/3legant-e-commerce/shop" className="mr-10"
					activeClassName="active">
						Shop
					</NavLink>

					<NavLink to="/3legant-e-commerce/product" className="mr-10"
					activeClassName="active">
						Product
					</NavLink>

					<NavLink to="/3legant-e-commerce/contact"
					activeClassName="active">Contact Us</NavLink>
				</div>

				<div className="flex justify-center items-center">
					<img src={search} alt="search" className="mr-4 hidden md:block" />
					{ loggedInUser ? 
						<div
						activeClassName="active"
						className="flex items-center justify-center">
							<img
								src={userCircle}
								alt="user circle"
								className="mr-1 hidden md:block"
							/>
							<span className="font-inter font-semibold capitalize mr-4">{loggedInUser}</span>
							<img src={logout} alt="Logout User" className="mr-4 hidden md:block cursor-pointer w-7 h-7 font-semibold" onClick={handleSignOut}/>
						</div>
					: 
					<NavLink to="/3legant-e-commerce/sign-in"
					activeClassName="active">
						<img src={login} alt="Login User" className="w-6 h-6 mr-4 hidden md:block" />
					</NavLink>
					}
					<ToastContainer />
					<img src={shoppingBag} alt="shopping bag" className="mr-1" />
					<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
						0
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
