const errorHandler = async (err, req, res, next) => {
	console.log(err);
	return res.status(500).json({
		status: "failed",
		message: "Something went wrong, please try again",
	});
};

module.exports = errorHandler;
