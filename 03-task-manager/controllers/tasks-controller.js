const getAllTasks = (req, res) => {
	res.send("Get all tasks");
};

const getTask = (req, res) => {
	res.json(req.params.id);
};

const addTask = (req, res) => {
	res.json(req.body);
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
