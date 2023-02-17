const Task = require("../models/tasks-model");

const getAllTasks = (req, res) => {
	res.send("Get all tasks");
};

const getTask = (req, res) => {
	res.json(req.params.id);
};

const addTask = async (req, res) => {
	const { name, completed } = req.body;
	const task = await Task.create({
		name: name,
		completed: completed,
	});

	return res.status(201).json({ task });
};

const updateTask = (req, res) => {
	res.send("Update task");
};

const deleteTask = (req, res) => {
	res.send("Delete task");
};

module.exports = {
	getAllTasks,
	getTask,
	addTask,
	updateTask,
	deleteTask,
};
