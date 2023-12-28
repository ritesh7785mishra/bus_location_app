"use client";
import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../Context";
import Blobs from "../../components/Blobs";
import Image from "next/image";

const Page = () => {
	// const navigate = useNavigate();
	// const { userLogin, getUserProfile, setLoader } = useContext(Context);

	useEffect(() => {
		let authToken = localStorage.getItem("authToken");
		if (authToken) {
			// getUserProfile();
			// navigate("/user-panel");
		}
	}, []);
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const [showPass, setShowPass] = useState(false);
	const [warning, setWarning] = useState(false);
	const { email, password } = loginData;
	const handleChange = (e: any) => {
		setWarning(false);
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	// const validation = async () => {
	// 	if (email == "" || password == "") {
	// 		setWarning(true);
	// 	} else if (
	// 		email == "ritesh7785mishra@gmail.com" &&
	// 		password == "@123Ritesh"
	// 	) {
	// 		navigate("/admin-Panel");
	// 	} else {
	// 		await userLogin(loginData).then(() => {
	// 			let authToken = localStorage.getItem("authToken");
	// 			if (authToken) {
	// 				navigate("/user-panel");
	// 			} else {
	// 				setLoader(false);
	// 				navigate("/login");
	// 				alert("Not a valid user");
	// 			}
	// 		});
	// 	}
	// };

	return (
		<div>
			<Blobs />
			<section className=" w-full sm:w-5/6 md:w-4/6 lg:w-3/6  mx-auto">
				<div className="w-full  px-4 mx-auto pt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
						<div className="rounded-t mb-0 px-6 py-6">
							<div className="text-center mb-3">
								<h6 className="text-white text-sm font-bold">Sign in with</h6>
							</div>
							<div className="btn-wrapper text-center">
								<button
									className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase  inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
									type="button"
									disabled
								>
									<Image
										alt="..."
										className="w-5 mr-1 bg-white"
										width={48}
										height={48}
										src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
									/>
									Github
								</button>
								<button
									className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase  inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
									type="button"
									disabled
								>
									<Image
										alt="..."
										className="w-5 mr-1 bg-white"
										src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
										height={48}
										width={48}
									/>
									Google{" "}
								</button>
							</div>
							<hr className="mt-6 border-b-1 border-blueGray-300" />
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<div className="text-white text-center mb-3 font-bold">
								<small>Or sign in with credentials</small>
							</div>
							<form>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-white text-xs font-bold mb-2"
										htmlFor="email"
									>
										Email
									</label>
									<input
										type="email"
										value={email}
										name="email"
										onChange={handleChange}
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="Email"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-white text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Password
									</label>
									<input
										type={showPass ? "text" : "password"}
										name="password"
										value={password}
										onChange={handleChange}
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="Password"
									/>
								</div>
								<p
									className="text-white"
									style={{ visibility: warning ? "visible" : "hidden" }}
								>
									Please fill email and password
								</p>
								<div>
									<label className="inline-flex items-center cursor-pointer">
										<input
											id="customCheckLogin"
											type="checkbox"
											className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>
										<span className="ml-2 text-sm font-semibold text-white">
											Remember me
										</span>
									</label>
								</div>
								<div className="text-center mt-6 flex justify-between items-center ">
									<div className="">
										<button
											className="bg-green-600 text-white text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1  -ml-5"
											type="button"
											onClick={() => {
												// setLoader(true);
												// validation();
											}}
										>
											Sign In
										</button>
										<p
											className="capitalize mt-2 text-green-300 hover:text-green-500 font-mono font-medium cursor-pointer"
											onClick={() => {
												// navigate("/signup");
											}}
										>
											Or Signup here
										</p>
									</div>

									<button
										className="bg-red-600 hover:bg-red-700 text-white text-sm  uppercase px-4 py-2 rounded-md self-start"
										type="button"
										onClick={() => {
											// navigate("/conductor-login");
										}}
									>
										Login as conductor
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;
