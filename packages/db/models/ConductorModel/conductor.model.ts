import mongoose, { Document, Schema } from "mongoose";
import { image_default } from "../../../constants/image.constants";

mongoose.set("strictQuery", true);

const { db_link } = process.env;

if (!db_link) {
	throw new Error("Database link not provided in environment variables");
}

mongoose
	.connect(db_link)
	.then((db) => {
		console.log("conductor database connected");
	})
	.catch((err) => {
		console.log(err.message);
	});

interface Conductor extends Document {
	id: string;
	name: string;
	properties: {
		email: string;
		conductor_id: string;
		profile_image?: string;
		aadhar_number: number;
		contact_number: number;
		password: string;
		address: string;
		pin_code: number;
	};
}

const conductorSchema = new Schema<Conductor>({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	properties: {
		email: {
			type: String,
			required: true,
		},
		conductor_id: {
			type: String,
			required: true,
		},
		profile_image: {
			type: String,
			default: image_default.profile_image,
		},
		aadhar_number: {
			type: Number,
			required: true,
		},
		contact_number: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		confirmPassword: {
			type: String,
			required: true,
			minLength: 8,
		},
		address: {
			type: String,
			required: true,
		},
		pin_code: {
			type: Number,
			required: true,
		},
	},
});

const conductorModel = mongoose.model<Conductor>(
	"conductorModel",
	conductorSchema
);

export default conductorModel;
