const Product = require("../models/Product.model");

module.exports.index = (request, response) => {
	response.json({
		message: "Hello World"
	});
};

module.exports.createProduct = (request, response) => {
	const { title, price, description } = request.body;
	const newProduct = new Product({
		title,
		price,
		description
	});
	newProduct
		.save()
		.then((product) => response.json(product))
		.catch((err) => response.json(err));
};

module.exports.findAllProducts = (request, response) => {
	Product.find()
		.then((allDaProducts) => {
			response.json({ allDaProducts });
		})
		.catch((err) => {
			response.json(err);
		});
};

module.exports.getDetail = (req, res) => {
	Product.findById(req.params.id)
		.then((product) => {
			if (!product) {
				return res.status(404).json({ message: "Product not found" });
			}
			res.json({ product });
		})
		.catch((err) =>
			res.status(400).json({ message: "Failed to get product", error: err })
		);
};