import React, { useState } from "react";
import Logo from "../components/Logo";
import { chair } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils.js';

const SignUp = () => {

	const navigate = useNavigate();

	const [signUpInfo, setSignUpInfo] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log("User Info : ", name, value);
		const copySignUpInfo = { ...signUpInfo };
		copySignUpInfo[name] = value;
		setSignUpInfo(copySignUpInfo);
	};

	console.log('SignUpInfo : ', signUpInfo);

	const handleSingUp = async (e) => {
		e.preventDefault();
		const {name, username, email, password} = signUpInfo;
		if(!name || !username || !email || !password){
			handleError("Please provide all the information");
		}
		try{
			const url = "https://3legant-ten.vercel.app/auth/register";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signUpInfo),
			});

			const result = await response.json();
			const {success, message, error} = result;
			if(success){
				handleSuccess(message);
				setTimeout(() => {
					navigate('/3legant-E-Commerce/sign-in');
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
					<form className="lg:max-w-[456px] lg:ml-0">
						<h4 className="text-primary mt-10 mb-6">Sign up</h4>
						<p className="text-nickel font-inter font-normal text-base">
							Already have an account?{" "}
							<Link
								to="/3legant-E-Commerce/sign-in"
								className="text-green font-inter font-semibold text-base hover:underline"
							>
								Sign in
							</Link>
						</p>
						<input
							type="text"
							name="name"
							placeholder="Your name"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signUpInfo.name}
						/>
						<input
							type="text"
							name="username"
							placeholder="Username"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signUpInfo.username}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email address"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signUpInfo.email}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
							onChange={handleChange}
							value={signUpInfo.password}
						/>

						<div className="flex items-center justify-start mt-8">
							<input
								type="checkbox"
								name=""
								id=""
								className="border-nickel rounded-sm focus:border-nickel focus:ring-0"
							/>
							<label
								htmlFor=""
								className="text-nickel font-inter font-base text-sm ml-3"
							>
								I agree with{" "}
								<span className="text-primary font-inter font-semibold cursor-pointer hover:underline">
									Privacy Policy
								</span>{" "}
								and{" "}
								<span className="text-primary font-inter font-semibold cursor-pointer hover:underline">
									Terms of Use
								</span>
							</label>
						</div>
						<Link
							to="/3legant-E-Commerce/"
							className="w-full h-12 mt-8 mb-10 flex justify-center items-center rounded-lg bg-primary text-white font-inter font-base font-semibold"
							onClick={handleSingUp}
						>
							Sign Up
						</Link>
					</form>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default SignUp;
