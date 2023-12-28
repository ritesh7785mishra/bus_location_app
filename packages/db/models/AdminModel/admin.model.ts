import mongoose, { Document, Schema } from "mongoose";
import { image_default } from "../../../constants/image.constants";

mongoose.set("strictQuery", true);

const { db_link } = process.env;

if (!db_link) {
	throw new Error("db_link is not available in environment variable");
}

mongoose
	.connect(db_link)
	.then(() => {
		console.log("Admin db connected successfully");
	})
	.catch((err) => {
		throw new Error(err);
	});

interface Admin extends Document {
	admin_id: string;
	profile_image?: string;
	email: string;
	name: string;
	contact_no: number;
	role: [string, string];
	password: string;
	aadhar_number: number;
	created_by?: string;
}

const adminSchema = new Schema<Admin>({
	admin_id: {
		type: String,
		required: true,
	},
	profile_image: {
		type: String,
		default: image_default.profile_image,
	},
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	contact_no: {
		type: Number,
		required: true,
	},
	role: {
		type: [String, String],
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	aadhar_number: {
		type: Number,
		required: true,
	},
	created_by: String,
});

const adminModel = mongoose.model<Admin>("adminModel", adminSchema);

export default adminModel;
