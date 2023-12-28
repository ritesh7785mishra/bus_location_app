import mongoose, { Document, Schema } from "mongoose";
import { image_default } from "../../../constants/image.constants";
// import emailValidator from "email-validator";
// import crypto from "crypto";

mongoose.set("strictQuery", true);

const { dbLink } = process.env;

if (!dbLink) {
	throw new Error("dbLink is not available in environment variable");
}

mongoose
	.connect(dbLink)
	.then((db) => {
		console.log("user database connected");
	})
	.catch((err) => {
		console.log("error");
	});

interface User extends Document {
	user_id: string;
	name: string;
	email: string;
	password: string;
	subscribed: boolean;
	confirmPassword: string;
	profile_image: string;
	reset_token?: string;
}

const userSchema = new Schema<User>({
	user_id: {
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
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
	},
	subscribed: {
		type: Boolean,
		default: true,
	},
	profile_image: {
		type: String,
		default: image_default.profile_image,
	},
	reset_token: String,
});

// Uncomment and adapt the following as needed
// userSchema.pre("save", function () {
//   this.confirmPassword = undefined;
// });

// userSchema.post("save", (doc) => {
//   console.log("Post save called", doc);
// });

// userSchema.methods.createResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString("hex");
//   this.resetToken = resetToken;
//   return resetToken;
// };

// userSchema.methods.resetPasswordHandler = function (password, confirmPassword) {
//   this.password = password;
//   this.confirmPassword = confirmPassword;
//   this.resetToken = undefined;
// };

const userModel = mongoose.model<User>("userModel", userSchema);

export default userModel;
