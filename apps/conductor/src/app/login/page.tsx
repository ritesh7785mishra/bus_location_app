"use client";
import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../Context";
import Blobs from "../../components/Blobs";
import Image from "next/image";

const Page = () => {
	// const navigate = useNavigate();
	// const { handleConductorLogin, setLoader } = useContext(Context);

	const [conductorLogin, setConductorLogin] = useState({
		email: "",
		password: "",
	});
	const { email, password } = conductorLogin;

	const handleChange = (e: any) => {
		setConductorLogin({
			...conductorLogin,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<Blobs />
			<section className=" w-full sm:w-5/6 md:w-4/6 lg:w-3/6  mx-auto ">
				<div className="w-full  px-4 mx-auto pt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
						<div className="rounded-t mb-0 px-6 py-6">
							<div className="text-center mb-10">
								<h6 className="text-white text-4xl font-bold">
									Conductor Login
								</h6>
							</div>
							<div className="btn-wrapper text-center">
								<button
									className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase  inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
									type="button"
									disabled
								>
									<Image
										alt="..."
										width={48}
										height={48}
										className="w-5 mr-1 bg-white"
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
										height={48}
										width={48}
										alt="..."
										className="w-5 mr-1 bg-white"
										src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
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
										id="email"
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
										htmlFor="password"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										value={password}
										onChange={handleChange}
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="Password"
									/>
								</div>
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
								<div className="text-center mt-6">
									<button
										className="bg-green-600 text-white text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mx-auto "
										type="button"
										// onClick={() => {
										// 	handleConductorLogin(conductorLogin).then(() => {
										// 		let conductorAuthToken =
										// 			localStorage.getItem("conductorAuthToken");
										// 		if (conductorAuthToken) {
										// 			setLoader(true);
										// 			navigate("/conductor-panel");
										// 		} else {
										// 			setLoader(false);
										// 			navigate("/conductor-login");
										// 			alert("Not a valid conductor");
										// 		}
										// 	});
										// }}
									>
										Sign In
									</button>
								</div>

								<div className="flex items-center mt-10">
									<p className="text-white ml-auto">Back To User Login</p>
									<button
										className="bg-green-600 text-white text-sm font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ml-4 "
										onClick={() => {
											// navigate("/login");
										}}
									>
										User Login
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
