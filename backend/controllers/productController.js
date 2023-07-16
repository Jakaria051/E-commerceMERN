const Product = require("../models/ProductModel")


const getProducts = (req, res) => {
    Product.create({name: "Mac"});
    res.send("get product call...");
}


module.exports = getProducts;