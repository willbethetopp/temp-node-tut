const express = require("express");
let { people } = require("./data");
// const morgan = require("morgan");

const app = express();

// app.use(morgan("tiny"));
app.use(express.static(__dirname + "/02-express-tutorial/methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/peoples", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => console.log("Server is listening on port 5000"));
