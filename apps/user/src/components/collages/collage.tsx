// CollageComponent.tsx
"use client";
import React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import { photos } from "./collageData";

const CollageComponent: React.FC = () => {
	return (
		<div className="collage-container">
			<Gallery photos={photos as PhotoProps[]} />
			<style jsx>{`
				.collage-container {
					max-width: 800px;
					margin: 0 auto;
					padding: 20px;
				}

				.collage-container img {
					width: 100%;
					height: auto;
					border-radius: 8px;
					transition: transform 0.3s ease-in-out;
				}

				.collage-container img:hover {
					transform: scale(1.1);
				}
			`}</style>
		</div>
	);
};

export default CollageComponent;
