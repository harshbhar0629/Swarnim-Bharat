/** @format */

// Import the Mongoose library
const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		lat: {
			type: Number,
			required: true,
		},
		long: {
			type: Number,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		ReviewAndRatings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Reviews",
			},
        ],
        status: {
            type: String,
            enum: ["Draft", "Published"]
        }
	},
	{ timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("Cards", cardSchema);
