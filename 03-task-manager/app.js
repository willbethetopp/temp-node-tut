const express = require("express");
const connectDB = require("./db/connect");
const tasksRoutes = require("./routes/tasks-route");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

// app
const app = express();

// middleware
app.use(express.static(path.join(__dirname, "./public")));
app.use(morgan("tiny"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound);
app.use(errorHandler);

// port
const PORT = process.env.PORT;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
