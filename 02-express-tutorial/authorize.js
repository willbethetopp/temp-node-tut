const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user == "taufik") {
		req.user = user;
		next();
	} else {
		return res.status(401).send("Unauthorized");
	}
};

module.exports = authorize;
