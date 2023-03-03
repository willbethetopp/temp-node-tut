require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDB = require("./db/connect");
const productsRoute = require("./routes/productsRoute");
const morgan = require("morgan");

const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/v1/products", productsRoute);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
