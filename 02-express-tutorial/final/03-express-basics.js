const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("You hit the resource home");
	res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
	console.log("You hit the resource about");
	res.status(200).send("About Page");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => console.log("Server listening on port 50000"));

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
