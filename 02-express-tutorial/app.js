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
// base url api/auth
app.use("/api/auth", auth);

app.listen(5000, () => console.log("Server is listening on port 5000"));
