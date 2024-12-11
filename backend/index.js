/** @format */

const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const userRoutes = require("./routes/userRoutes");

// Loading environment variables from .env file
require("dotenv").config();

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: __dirname + "/tmp/",
	})
);

// Connecting to cloudinary
cloudinaryConnect();

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.get("/api/v1/auth", userRoutes);

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
