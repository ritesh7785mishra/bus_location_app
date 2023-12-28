"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "../../Styles/Home.css";
// import MapComp from "../../components/MapComp";
// import { Context } from "../../Context";

const Page = () => {
	// const navigate = useNavigate();
	// const { currentUser, handleUserLogout, getUserProfile, setLoader } =
	// useContext(Context);

	const mapElement = useRef<HTMLInputElement>(null);

	const [currentRoute, setCurrentRoute] = useState("");

	// const { name } = currentUser;
	const { VITE_apiKey, VITE_baseServerUrl } = process.env;

	//Using useRef hook to get JS ability to add map to the react application because tom tom api doesn't work good with the react element.
	// const mapElement = useRef();
	const [allLocationArray, setAllLocationArray] = useState([]);

	const [map, setMap] = useState({});
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);

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
		// getUserProfile();
		navigator.geolocation.getCurrentPosition(function (position) {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
		//creates a map div. which is visible on the client side.

		let map = tt.map({
			key: "BDPPjyvXBVAzxOAGcWRV98qIHP978rko",
			container: mapElement.current as HTMLElement,

			//sets up what are the items you need to see on the map.
			stylesVisibility: {
				trafficIncidents: true,
				trafficFlow: true,
			},
			//center defines origin location of the person.
			center: [longitude, latitude],
			zoom: 14,
		});

		//setMap function sets up map state for the future use of the map.
		setMap(map);
		//--------------------------------------------------------------------------------------------------------------------------//

		const addDeliveryMarker = (lngLat: any, map: any) => {
			const element = document.createElement("div");
			element.className = "bus-marker";
			//make a new marker named element
			let busMarker = new tt.Marker({
				element: element,
			})
				.setLngLat(lngLat)
				.addTo(map);

			setTimeout(() => {
				busMarker.remove();
			}, 5100);
		};

		// const locationObjArray = (locationData) => {
		// 	const newAllLocation = locationData.map((location) => {
		// 		let lngLat = location.currentLocation;
		// 		let lObj = {
		// 			lat: lngLat[1],
		// 			lng: lngLat[0],
		// 		};

		// 		addDeliveryMarker(lObj, map);
		// 	});
		// 	// setAllLocationArray(newAllLocation);
		// };

		// allLocationArray.map((location) => {
		//   const lObj = {
		//     lat: location[1],
		//     lng: location[0],
		//   };
		//   addDeliveryMarker(lObj, map);
		// });

		async function fetchLocations() {
			const res = await fetch(`${VITE_baseServerUrl}/user/all-buses`);
			const data = await res.json();

			if (data) {
				console.log("Fetch location of all buses ran");
				const allLocationData = data.data;
				// locationObjArray(allLocationData);
			}
		}

		// fetchLocations();

		let interval = setInterval(fetchLocations, 5000);

		//-------------------------------------------------------------------------------------------------------------------------//

		//this is the origin location I think
		const addUserCurrentPosition = () => {
			//creates a off set.
			const popupOffset = {
				bottom: [0, -25],
			};

			//creates  a popup to show
			const popup = new tt.Popup({ offset: popupOffset }).setHTML(
				"This is you!"
			);
			const element = document.createElement("div");
			element.className = "marker";

			//creates a marker for the origin position of the user.
			const marker = new tt.Marker({
				draggable: true,
				element: element,
			})
				.setLngLat([longitude, latitude])
				.addTo(map);

			//makes the user position draggable.
			marker.on("dragend", () => {
				const lngLat = marker.getLngLat();
				setLongitude(lngLat.lng);
				setLatitude(lngLat.lat);
			});

			//this I think to toggle the popup
			marker.setPopup(popup).togglePopup();
		};
		addUserCurrentPosition(); // add marker called to set the origin position.
		return () => {
			clearInterval(interval);
			map.remove();
		};
	}, [longitude, latitude]);

	// if (currentUser) {
	// 	setLoader(false);
	// }

	const fetchSelectedRouteBuses = async (route: any) => {
		try {
			const res = await fetch(
				`${VITE_baseServerUrl}/user/route-selected-buses`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						route: route,
					}),
				}
			);

			const data = await res.json();

			if (data) {
				console.log(data.data);
				// locationObjArray(data.data);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div className="absolute top-0 w-full h-full p-4 lg:flex lg:justify-between">
			<div className="map-component rounded-xl h-4/5 lg:h-[calc(100vh-30px)] lg:w-7/12  ">
				<div ref={mapElement} className="w-full h-full rounded-lg"></div>
			</div>
			<div className="max-w-3xl mx-auto lg:mx-0 lg:w-4/12 lg:mr-8">
				<div className="flex items-center justify-between mb-10 mt-5">
					<h1 className="text-4xl text-white text-center font-semibold ">
						Welcome,
						<span className="text-3xl text-green-500 tracking-wider block text-left sm:inline-block sm:ml-4 capitalize">
							{/* {name ? name : "User Name"} */}
							User Name
						</span>
					</h1>

					<button
						className="text-white font-mono text-xl bg-red-600 hover:bg-red-700 active:bg-red-700 py-1 px-4 rounded "
						onClick={() => {
							// handleUserLogout();
							// navigate("/login");
						}}
					>
						Logout
					</button>
				</div>
				<label htmlFor="routes" className="block mb-4  font-medium text-white">
					Select Route
				</label>
				<select
					id="routes"
					className="border border-gray-300 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
					value={currentRoute}
					onChange={(e) => {
						const route = e.target.value;
						console.log(route);
						setCurrentRoute(route);
						fetchSelectedRouteBuses(route);
					}}
				>
					<option className="text-white">Choose Your Route</option>

					{routeOptions.map((route) => {
						return (
							<option className="text-white" value={route}>
								{route}
							</option>
						);
					})}
				</select>

				<div></div>

				<div className="flex mb-10 justify-around text-white text-lg">
					<button className="rounded-xl bg-green-500 hover:bg-green-700 active:bg-green-700 border-green-800  px-4 py-1 border-2 ">
						Selected Buses
					</button>
					<button className="rounded-xl bg-green-500 hover:bg-green-700 active:bg-green-700 border-green-800  px-4 py-1 border-2 ">
						All Buses
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
