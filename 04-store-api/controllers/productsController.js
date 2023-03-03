const getAllProducts = async (req, res) =>
	res.status(200).json({ status: "success", msg: "Get All Products" });

const getAllProductsStatic = async (req, res) =>
	res
		.status(200)
		.json({ status: "success", msg: "Get All Products - Testing" });

module.exports = { getAllProducts, getAllProductsStatic };
