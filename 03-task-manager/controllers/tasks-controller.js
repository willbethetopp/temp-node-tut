const Task = require("../models/tasks-model");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({
		status: "success",
		data: { tasks: tasks, amount: tasks.length },
	});
});

const getTask = asyncWrapper(async (req, res, next) => {
	const { id } = req.params;

	const task = await Task.findOne({ _id: id });
	if (!task) {
		const error = new Error("Not Found");
		error.status = 404;
		return next(error)
		return res
			.status(404)
			.json({ status: "failed", message: `Task not found` });
	}
	res.status(200).json({ status: "success", data: task });
});

const addTask = asyncWrapper(async (req, res) => {
	const { name, completed } = req.body;

	const task = await Task.create({
		name: name,
		completed: completed,
	});
	return res.status(201).json({ status: "success", data: task });
});

const updateTask = asyncWrapper(async (req, res) => {
	const { id } = req.params;
	const body = req.body;

	const task = await Task.findOneAndUpdate({ _id: id }, body, {
		new: true,
		runValidators: true,
	});
	if (!task)
		return res
			.status(404)
			.json({ status: "failed", message: "Task not found" });
	res.status(200).json({ status: "success", dataUpdated: task });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const task = await Task.findOneAndDelete({ _id: id });
	if (!task)
		return res
			.status(404)
			.json({ status: "failed", message: "Task not found" });
	res.status(200).json({ status: "success", dataDeleted: task });
});

module.exports = {
	getAllTasks,
	getTask,
	addTask,
	updateTask,
	deleteTask,
};
