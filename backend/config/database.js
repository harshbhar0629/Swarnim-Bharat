/** @format */

const mongoose = require("mongoose");

const MONGO_URL =
	process.env.NODE_ENV !== "production"
		? process.env.MONGODB_URL
		: process.env.MONGO_URL;

exports.dbConnect = () => {
	mongoose
		.connect(MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Db connect successfully");
		})
		.catch((err) => {
			console.log("Error in db connection");
		});
};
