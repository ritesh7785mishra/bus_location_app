import mongoose from "mongoose";
let isConnected: boolean = false;

export const connectToDb = async () => {
	if (!process.env.MONGODB_URL) {
		console.log("mongodb url not found");
		return;
	}

	if (isConnected) {
		console.log("already connected to database");
		return;
	}

	try {
		mongoose
			.connect(process.env.MONGODB_URL)
			.then(() => {
				isConnected = true;
				console.log("connected to database");
			})
			.catch((error: any) => {
				console.log("Failed to connect: ", error);
			});
	} catch (error: any) {
		console.log(error);
	}
};
