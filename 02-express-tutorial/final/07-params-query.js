const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) =>
	res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
);

app.get("/api/products", (req, res) => {
	const newProduct = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	return res.json(newProduct);
});

app.get("/api/products/:productId", (req, res) => {
	// request params
	const { productId } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productId)
	);

	if (!singleProduct)
		return res.status(404).send("<h1>Product doens't exist</h1>");

	return res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
	console.log(req.params);
	return res.send("Hello World");
});

app.get("/api/v1/query", (req, res) => {
	// request query
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) =>
			product.name.startsWith(search)
		);
	}

	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (!sortedProducts) {
		return res.status(200).json({ success: true, data: [] });
	}

	return res.status(200).json({ success: true, data: sortedProducts });
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000...");
});
