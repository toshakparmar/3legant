import React, { useState } from "react";
import Logo from "../components/Logo";
import { chair } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils.js';

const SignIn = () => {

	const navigate = useNavigate();

	const [signInInfo, setSignInInfo] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log("User Info : ", name, value);
		const copySignInInfo = { ...signInInfo };
		copySignInInfo[name] = value;
		setSignInInfo(copySignInInfo);
	};

	console.log('SignInInfo : ', signInInfo);

	const handleSignIn = async (e) => {
		e.preventDefault();
		const {email, password} = signInInfo;
		if(!email || !password){
			handleError("Please provide all the information");
		}
		try{
			const url = "https://3legant-ten.vercel.app/auth/login";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signInInfo),
			});

			const result = await response.json();
			const {success, message, token, name, error} = result;
			if(success){
				handleSuccess(message);
				localStorage.setItem("token", token);
				localStorage.setItem("loggedInUser", name);
				setTimeout(() => {
					navigate('/3legant-E-Commerce/home');
				}, 1000);
			}else if(error){
				handleError(error);
			}else{
				handleError(message);
			}
		}catch(error){	
			handleError(error);
		}
	}

	return (
		<>
			<div className="flex h-screen flex-col lg:flex-row">
				<div className="flex-1 bg-cultured relative">
					<div className="flex flex-col items-center justify-center h-full">
						<div className="absolute top-0 mt-8">
							<Logo />
						</div>
						<img
							src={chair}
							alt="chair"
							className="object-contain h-[430px] w-[375px] lg:h-auto lg:w-auto"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
				</div>

				<div className="flex-1 flex justify-center items-center px-8">
					<form action="" className="lg:max-w-[456px] lg:ml-0">
						<h4 className="text-primary mt-10 mb-6">Sign In</h4>
						<p className="text-nickel font-inter font-normal text-base">
							Don’t have an accout yet?{" "}
							<Link
								to="/3legant-E-Commerce/sign-up"
								className="text-green font-inter font-semibold text-base hover:underline"
							>
								Sign Up
							</Link>
						</p>
						<input
							type="email"
							name="email"
							placeholder="Enter Your Email Address"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signInInfo.email}
						/>
						<input
							type="password"
							name="password"
							placeholder="Enter Your Password"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signInInfo.password}	
						/>

						<div className="flex items-center mt-8">
							<input
								type="checkbox"
								id="rememberMe"
								className="border-nickel rounded-sm focus:ring-0"
							/>
							<label
								htmlFor="rememberMe"
								className="text-nickel font-inter text-base font-normal ml-3"
							>
								Remember me
							</label>
							<a
								href="#"
								className="text-primary font-inter text-base font-semibold ml-auto hover:underline"
							>
								Forgot password?
							</a>
						</div>

						<Link
							to="/3legant-E-Commerce/"
							className="w-full h-12 mt-8 mb-10 flex justify-center items-center rounded-lg bg-primary text-white font-inter font-base font-semibold"
							onClick={handleSignIn}
						>
							Sign In
						</Link>
					</form>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default SignIn;
