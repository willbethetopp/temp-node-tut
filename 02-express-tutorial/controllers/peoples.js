const express = require("express");

let { people } = require("../data");

const getPeoples = (req, res) => {
	const { name, limit } = req.query;

	let filteredPeople = people;

	if (name) {
		filteredPeople = filteredPeople.filter((person) =>
			person.name.toLowerCase().includes(name.toLowerCase())
		);
	}

	if (limit) {
		filteredPeople = filteredPeople.slice(0, Number(limit));
	}

	res.status(200).json({ success: true, data: filteredPeople });
};

const getPersonById = (req, res) => {
	const { id } = req.params;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(400)
			.json({ success: false, msg: "Id user doesn't exist" });
	}

	res.status(200).json({ success: true, data: person });
};

const addPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "Please provide name" });
	}

	const id = people.length + 1;
	people.push({ id: id, name: name });

	res
		.status(201)
		// .json({ success: true, data: [...people, { id: id, name: name }] });
		.json({ success: true, data: people });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(400)
			.json({ success: false, msg: "Id user doesn't exist" });
	}

	// const newPeoples = people.map((person) => {
	// 	if (person.id === Number(id)) {
	// 		person.name = name;
	// 	}
	// 	return person;
	// });

	people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});

	// res.status(200).json({ success: true, data: newPeoples });
	res.status(200).json({ success: true, data: people });
};

const deletePerson = (req, res) => {
	const { id } = req.params;

	const person = people.find((person) => person.id === Number(id));
	const index = people.indexOf(person);

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: "Person doesn't exist" });
	}

	// const newPeoples = people.filter((person) => person.id !== Number(id));
	people.splice(index, 1);

	res.status(200).json({ success: true, data: people });
};

module.exports = {
	getPeoples,
	getPersonById,
	addPerson,
	updatePerson,
	deletePerson,
};
