"use client";
import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../Context";
import Blobs from "../../components/Blobs";

const Page = () => {
	// const navigate = useNavigate();
	const [name, setName] = useState("conductorName");
	const [id, setId] = useState("Conductor id");
	const [currentRoute, setCurrentRoute] = useState("");
	const [fullBtn, setFullBtn] = useState(false);
	const [standingBtn, setStandingBtn] = useState(false);
	const [emptySeatsBtn, setEmptySeatsBtn] = useState(true);
	const [shareLocationBtn, setShareLocationBtn] = useState(false);
	const [stopLocationBtn, setStopLocationBtn] = useState(false);

	// console.log(shareLocationBtn, stopLocationBtn);
	// const {
	// 	currentConductor,
	// 	setCurrentConductor,
	// 	getConductorProfile,
	// 	setConductorLoggedIn,
	// 	setLoader,
	// } = useContext(Context);

	// if (currentConductor) {
	// 	setLoader(false);
	// }
	const { VITE_baseServerUrl } = process.env;

	const routeOptions = [
		"SanjeevNagar-Tatmil-Rawatpur-IIT",
		"IIT-Rawatpur-Tatmil-SanjeevNagar",
		"SanjeevNagar-Rania",
		"Rania-SanjeevNagar",
		"SanjeevNagar-Ghantaghar-Nankari",
		"SanjeevNagar-Jajmau-Bithoor",
		"Bithoor-Jajmau-SanjeevNagar",
		"Ramaipur-SanjeevNagar",
		"SanjeevNagar-Ramaipur",
		"SanjeevNagar-SainikChauraha",
		"SainikChauraha-SanjeevNagar",
	];

	useEffect(() => {
		if (localStorage.getItem("conductorAuthToken")) {
			// getConductorProfile();
		}
	}, []);

	// useEffect(() => {
	// 	if (currentConductor) {
	// 		setName(currentConductor.name);
	// 		setId(currentConductor.conductorId);
	// 	}
	// }, [currentConductor]);

	// console.log(currentRoute);

	// useEffect(() => {
	// 	// function to send position to the mongodb location database.
	// 	const sendPosition = () => {
	// 		console.log("send Positon function is running");
	// 		navigator.geolocation.getCurrentPosition(async function (position) {
	// 			let { latitude } = position.coords;
	// 			let { longitude } = position.coords;

	// 			fetch(`${VITE_baseServerUrl}/conductor/update-location`, {
	// 				method: "PATCH",
	// 				headers: { "Content-Type": "application/json" },
	// 				body: JSON.stringify({
	// 					id: currentConductor.id,
	// 					longlat: [longitude, latitude],
	// 				}),
	// 			})
	// 				.then((res) => res.json())
	// 				.then((data) => console.log(data.data, "Send location function ran"))
	// 				.catch((error) => console.log(error));
	// 		});
	// 	};
	// 	let interval;
	// 	if (shareLocationBtn) {
	// 		interval = setInterval(sendPosition, 2000);
	// 	}

	// 	if (stopLocationBtn) {
	// 		clearInterval(interval);
	// 	}

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [shareLocationBtn, stopLocationBtn]);

	// const updateSeatStatus = async (seatStatus) => {
	// 	const res = await fetch(
	// 		`${VITE_baseServerUrl}/conductor/update-seat-status`,
	// 		{
	// 			method: "PATCH",
	// 			headers: { "Content-Type": "application/json" },
	// 			body: JSON.stringify({
	// 				seatStatus: seatStatus,
	// 				id: currentConductor.id,
	// 			}),
	// 		}
	// 	);

	// 	const data = await res.json();
	// 	console.log("This is Seat status update function", data);
	// };

	// const updateCurrentRoute = async (currentRoute) => {
	// 	try {
	// 		const res = await fetch(
	// 			`${VITE_baseServerUrl}/conductor/update-current-route`,
	// 			{
	// 				method: "PATCH",
	// 				headers: { "Content-Type": "application/json" },
	// 				body: JSON.stringify({
	// 					currentRoute: currentRoute,
	// 					id: currentConductor.id,
	// 				}),
	// 			}
	// 		);

	// 		const data = await res.json();
	// 		if (data) {
	// 			console.log(data);
	// 		}
	// 	} catch (error: any) {
	// 		console.log(error.message);
	// 	}
	// };

	return (
		<div>
			<Blobs />
			<div className="max-w-xl mx-auto m-4 p-4 ">
				<h1 className="text-4xl text-white text-center font-semibold mb-10">
					Welcome,
					<span className="text-4xl text-green-500 tracking-wider ml-4 capitalize">
						{name}
					</span>
				</h1>

				<label
					htmlFor="routes"
					className="block mb-4  font-medium text-white dark:text-gray-400"
				>
					Select Route
				</label>
				<select
					id="routes"
					className="border border-gray-300 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
					value={currentRoute}
					onChange={(e) => {
						const route = e.target.value;
						console.log(route);

						if (route == "Choose Your Route") {
							setCurrentRoute("");
							setShareLocationBtn(false);
						} else {
							setCurrentRoute(route);
							// updateCurrentRoute(currentRoute);
						}
					}}
				>
					<option defaultValue="">Choose Your Route</option>

					{routeOptions.map((route) => {
						return <option value={route}>{route}</option>;
					})}
				</select>

				<div className="flex flex-col mb-5">
					{currentRoute ? (
						<button
							className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 self-center mb-7"
							onClick={() => {
								setShareLocationBtn(true);
								setStopLocationBtn(false);
							}}
						>
							Start Sharing Location
						</button>
					) : (
						<button
							className=" text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2  self-center mb-7"
							disabled
						>
							Start Sharing Location
						</button>
					)}
					<button
						className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 self-center"
						onClick={() => {
							setShareLocationBtn(false);
							setStopLocationBtn(true);
						}}
					>
						Stop Sharing Location
					</button>
				</div>

				<div className="flex mb-5 justify-evenly">
					<button
						className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
						onClick={() => {
							setFullBtn(true);
							// updateSeatStatus("Full");
							setStandingBtn(false);
							setEmptySeatsBtn(false);
						}}
					>
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
							Full
						</span>
					</button>

					<button
						className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
						onClick={() => {
							setFullBtn(false);
							setStandingBtn(true);
							// updateSeatStatus("Standing-Space");
							setEmptySeatsBtn(false);
						}}
					>
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
							Standing Space
						</span>
					</button>

					<button
						className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
						onClick={() => {
							setFullBtn(false);
							setStandingBtn(false);
							setEmptySeatsBtn(true);
							// updateSeatStatus("Empty");
						}}
					>
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
							Empty
						</span>
					</button>
				</div>

				<div className="mb-5 flex">
					<button
						className=" py-2 px-4 text-white bg-red-500 hover:bg-red-700 rounded-md font-mono font-bold tracking-wider ml-auto"
						onClick={() => {
							localStorage.removeItem("conductorAuthToken");
							// setCurrentConductor({});
							// setConductorLoggedIn(false);
							// navigate("/conductor-login");
						}}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
