/** @format */

const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const userRoutes = require("./routes/userRoutes");
const contactUsRoute = require("./routes/contactRoute");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

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
	res.send("Server Working")
});

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", contactUsRoute);

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

app.get("*", (req, res) => {
	res.send("Path not found");
})

// End of code.
