const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.log(`Error connecting to MongoDB: ${error}`);
	}
	return mongoose
		.connect(uri, {})
		.then(() => console.log("DB Connected"))
		.catch((e) => console.log(e));
};

module.exports = connectDB;

// const { MongoClient } = require("mongodb");

// const connectToDB = async (uri) => {
// 	const client = new MongoClient(uri);

// 	try {
// 		const db = client.db("03-TASK-MANAGER");
// 		const task = db.collection("Task");

// 		return await task;
// 	} finally {
// 		await client.close();
// 	}
// };

// module.exports = connectToDB;
