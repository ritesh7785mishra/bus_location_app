"use client";
import React from "react";
import "./Welcome.css";
// import { useNavigate } from "react-router-dom";
import BottomDesign from "../../components/BottomDesign";
import Blobs from "../../components/Blobs";
import { motion } from "framer-motion";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Welcome = () => {
	// const navigate = useNavigate();
	const router = useRouter();
	return (
		<motion.div
			className="welcome-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Blobs />
			<motion.div
				className="welcome-text absolute top-64 ml-12 p-4"
				initial={{ position: "relative", top: -250 }}
				animate={{ top: "10rem" }}
				transition={{ type: "spring", delay: 0.5 }}
			>
				<h1 className="welcome-heading text-white text-6xl mb-6">
					Ride
					<div className="welcome-heading-dot w-3 h-3 bg-green-500 rounded-full inline-block ml-2"></div>
				</h1>
				<p className="welcome-subtext text-white">
					"Effortlessly glide through the city, hop on our e-buses today!"
				</p>
			</motion.div>
			<motion.button
				className="get-started-btn text-white  absolute bottom-20 left-12 p-3 px-8 rounded-2xl cursor-pointer font-bold tracking-wider"
				initial={{ x: "-100vw" }}
				animate={{ x: 0 }}
				transition={{ type: "spring", stiffness: 120 }}
				whileHover={{
					scale: 1.1,
					textShadow: "0px 0px 8px rgb(255,255,255)",
					boxShadow: "0px 0px 8px rgb(255,255,255)",
					transition: {
						duration: 0.3,
						yoyo: Infinity,
					},
				}}
				onClick={() => {
					router.push("/login");
				}}
			>
				Get Started
			</motion.button>
			<BottomDesign />
		</motion.div>
	);
};

export default Welcome;
