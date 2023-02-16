// const express = require("express");
const connectDB = require("./db/connect");
// const tasksRoutes = require("./routes/tasks-route");
// const morgan = require("morgan");
require("dotenv").config();
// // const path = require("path");

// const app = express();

// // app.use(express.static(path.join(__dirname, "./public")));
// app.use(morgan("tiny"));
// app.use(express.json());
// app.use("/api/v1/tasks", tasksRoutes);

// const PORT = 3000;

// const connectToDB = async () => {
// 	try {
// 		await connectDB(process.env.MONGO_URI);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

connectDB(process.env.MONGO_URI);
// app.listen(PORT, () => {
// 	console.log(`Server is listening on port ${PORT}`);
// });
