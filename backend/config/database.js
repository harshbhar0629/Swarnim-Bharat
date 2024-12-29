/** @format */

const mongoose = require("mongoose");
// environment variables
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}


exports.dbConnect = () => {
	mongoose
		.connect(process.env.MONGODB_URL, {
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
