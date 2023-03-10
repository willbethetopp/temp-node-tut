const express = require("express");
const path = require("path");
let { people } = require("./data");
// const morgan = require("morgan");

const app = express();

// app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "methods-public")));
// parse from data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/peoples", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/peoples", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "Please provide name" });
	}

	res.status(201).json({ success: true, person: name });
});

app.get("/api/postman/peoples", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/peoples", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "Please provide name" });
	}

	const id = people.length + 1;
	res
		.status(201)
		.json({ success: true, data: [...people, { id: id, name: name }] });
});

app.put("/api/postman/peoples/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(400)
			.json({ success: false, msg: "Id user doesn't exist" });
	}

	const newPeoples = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});

	res.status(200).json({ success: true, data: newPeoples });
});

app.delete("/api/postman/peoples/:id", (req, res) => {
	const { id } = req.params;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: "Person doesn't exist" });
	}

	const newPeoples = people.filter((person) => person.id !== Number(id));

	res.status(200).json({ success: true, data: newPeoples });
});

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome, ${name}`);
	}

	return res.status(401).send("You didn't input name");
});

app.listen(5000, () => console.log("Server is listening on port 5000"));
