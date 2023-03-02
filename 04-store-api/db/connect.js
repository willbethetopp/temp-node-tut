const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = (uri) => {
	mongoose.connect(
		uri,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err) => (err ? console.log(err) : console.log("MongoDB is connected"))
	);
};

module.exports = connectDB;
