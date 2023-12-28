import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
	admin_id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	contact_no: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	// in role there are chances of improvement
	role: {
		type: Array,
		required: true,
	},
	profile_picture: String,
	aadhar_number: {
		type: Number,
	},
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
