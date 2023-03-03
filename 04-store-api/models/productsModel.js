const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product's name must be provided"],
		trim: true,
		maxLength: [20, "Product's name can not more than 20 characters"],
	},
	price: {
		type: Number,
		required: [true, "Product's price must be required"],
	},
	company: {
		type: String,
		enum: {
			values: ["ikea", "liddy", "caressa", "marcos"],
			message: "There is no {VALUE} yet",
		},
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Product", ProductSchema);
