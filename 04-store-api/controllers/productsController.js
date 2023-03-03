const Product = require("../models/productsModel");

const getAllProducts = async (req, res) => {
	const products = await Product.find(req.query);

	res
		.status(200)
		.json({ status: "success", products, nbHits: products.length });
};

const getAllProductsStatic = async (req, res) => {
	throw new Error("testing async error");
	res
		.status(200)
		.json({ status: "success", msg: "Get All Products - Testing" });
};

module.exports = { getAllProducts, getAllProductsStatic };
