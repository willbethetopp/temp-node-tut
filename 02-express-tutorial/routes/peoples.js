const express = require("express");
const router = express.Router();

let { people } = require("../data");

// router.get("/api/peoples", (req, res) => {
// 	res.status(200).json({ success: true, data: people });
// });

// router.post("/api/peoples", (req, res) => {
// 	const { name } = req.body;
// 	if (!name) {
// 		return res.status(400).json({ success: false, msg: "Please provide name" });
// 	}

// 	res.status(201).json({ success: true, person: name });
// });

router.get("/", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "Please provide name" });
	}

	const id = people.length + 1;
	res
		.status(201)
		.json({ success: true, data: [...people, { id: id, name: name }] });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
