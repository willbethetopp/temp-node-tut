const express = require("express");
const path = require("path");
const morgan = require("morgan");

const peoples = require("./routes/peoples");
const auth = require("./routes/auth");

const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "methods-public")));
// parse from data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// base url api/peoples
app.use("/api/peoples", peoples);

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome, ${name}`);
	}

	return res.status(401).send("You didn't input name");
});

app.listen(5000, () => console.log("Server is listening on port 5000"));
