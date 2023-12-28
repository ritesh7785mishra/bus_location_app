"use client";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { Context } from "../../Context";
import Blobs from "../../components/Blobs";

const Page = () => {
	// const { handleAddConductor, fetchConductors } = useContext(Context);
	// const navigate = useNavigate();
	const [userName, setUserName] = useState("");

	const [userProperties, setUserProperties] = useState({
		phoneNumber: "",
		email: "",
		aadharNumber: "",
		conductorId: "",
		address: "",

		district: "",
		state: "",

		country: "India",
		password: "",
		confirmPassword: "",
		profileImage: "img/users/default.jpeg",
	});

	const {
		phoneNumber,
		email,
		aadharNumber,
		conductorId,
		address,

		district,
		state,

		country,
		password,
		confirmPassword,
	} = userProperties;

	function handleChange(e: any) {
		setUserProperties({
			...userProperties,
			[e.target.name]: e.target.value,
		});
	}

	function handleNameChange(e: any) {
		setUserName(e.target.value);
	}

	async function handleSubmit() {
		let userObj = { name: userName, properties: { ...userProperties } };
		// handleAddConductor(userObj)
		//   .then(() => fetchConductors())
		//   .then(() => {
		//     navigate("/admin-panel");
		//   });
	}

	return (
		<div>
			<Blobs />
			<div className=" mx-auto  p-6 max-w-xl">
				<div className="flex items-center mb-14">
					<h2 className="text-white text-4xl font-bold mb-6 text-center">
						Add Admin
					</h2>
					<p
						className="text-green-400 font-bold cursor-pointer ml-auto"
						onClick={() => {
							// navigate("/admin-panel");
						}}
					>
						Back to Admin Panel
					</p>
				</div>

				<form>
					<div className="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label
								htmlFor="userName"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Name
							</label>
							<input
								type="text"
								id="userName"
								name="name"
								onChange={handleNameChange}
								value={userName}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter Your Name"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								value={email}
								name="email"
								onChange={(e) => handleChange(e)}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Enter Your Email"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="phoneNumber"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Contact Number
							</label>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								value={phoneNumber}
								onChange={handleChange}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="123-456-789-0"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="aadharNumber"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Aadhar Number
							</label>
							<input
								type="tel"
								id="aadharNumber"
								name="aadharNumber"
								value={aadharNumber}
								onChange={handleChange}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="123-45-678"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="conductorId"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Conductor ID
							</label>
							<input
								type="text"
								id="conductorId"
								value={conductorId}
								onChange={handleChange}
								name="conductorId"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Conductor ID"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="address"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Address
							</label>
							<input
								type="text"
								id="address"
								value={address}
								onChange={handleChange}
								name="address"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Address"
								required
							/>
						</div>
					</div>
					<div className="mb-6">
						<label
							htmlFor="district"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							District
						</label>
						<input
							type="text"
							id="district"
							name="district"
							value={district}
							onChange={handleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="District"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="state"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							State
						</label>
						<input
							type="text"
							id="state"
							name="state"
							value={state}
							onChange={handleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="State"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="country"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Country
						</label>
						<input
							type="text"
							id="country"
							name="country"
							value={country}
							onChange={handleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="India"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={handleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder=".........."
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirmPassword"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Confirm Password
						</label>
						<input
							type="text"
							id="confirmPassword"
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder=".........."
							required
						/>
					</div>
					<div className="flex items-start mb-6">
						<div className="flex items-center h-5">
							<input
								id="remember"
								type="checkbox"
								value=""
								className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
								required
							/>
						</div>
						<label
							htmlFor="remember"
							className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							I agree with the{" "}
							<a
								href="#"
								className="text-blue-600 hover:underline dark:text-blue-500"
							>
								terms and conditions
							</a>
							.
						</label>
					</div>
					<button
						onClick={handleSubmit}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add To Server
					</button>
				</form>
			</div>
		</div>
	);
};

export default Page;
