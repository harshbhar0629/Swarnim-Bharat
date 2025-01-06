/** @format */

// Import the Mongoose library
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the email field with type String, required, and trimmed
		email: {
			type: String,
			required: true,
			trim: true,
		},
		// Define the password field with type String and required
		password: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		token: {
			type: String,
		},
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("User", userSchema);
