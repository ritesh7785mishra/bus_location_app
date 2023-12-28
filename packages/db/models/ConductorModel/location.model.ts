import mongoose, { Document, Schema } from "mongoose";

mongoose.set("strictQuery", true);

const { db_link } = process.env;

if (!db_link) {
	throw new Error("db_link is not available in environment variable");
}

mongoose
	.connect(db_link)
	.then((db) => {
		console.log("location database connected");
	})
	.catch((err) => {
		console.log(err.message);
	});

interface Location extends Document {
	id: string;
	current_route: string;
	current_location: [number, number];
	seat_status: string;
}

const locationSchema = new Schema<Location>({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	current_route: {
		type: String,
		default: "All Kanpur",
	},
	current_location: {
		type: [Number],
		default: [0, 0],
	},
	seat_status: {
		type: String,
		default: "Empty",
	},
});

const locationModel = mongoose.model<Location>("locationModel", locationSchema);

export default locationModel;
