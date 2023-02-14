const express = require("express");
const tasksRoutes = require("./routes/tasks-route");
const morgan = require("morgan");
// const path = require("path");

const app = express();

// app.use(express.static(path.join(__dirname, "./public")));
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRoutes);

const port = 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
