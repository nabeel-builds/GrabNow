const productModel = require("../models/product.model")
const cloudinary = require("../config/cloudinary")


/**
 * - The product.controller.js contains 5 APIs
 * 1.  Get All Products 
 * 2.  Get Single Product 
 * 3.  Create a Product 
 * 4.  Update a Product
 * 5.  Delete a Product
 */

// Get All Products

const getProducts = async function (req, res) {

    try {

        const products = await productModel.find({})
        res.json(products)

    } catch (err) {

        return res.json(500).json({
            message: "Server Error"
        })

    }

}

// Get single Product

const getProductById = async function (req, res) {

    try {

        const product = await productModel.findById(req.params.id)

        if (product) {
            return res.json(product)
        }
        else {
            return res.status(404).json({
                message: "Product not found"
            })
        }

    } catch (err) {

        return res.status(500).json({
            message: "Server Error",
            
        })

    }

}

// Create a Product only (Admin)

const createProducts = async function (req, res) {

    try {

        const { name, description, price, category, stock } = req.body
        let imageUrl = '';
        if (req.file) {

            const result = await cloudinary.uploader.upload(req.file.path)
            console.log(result)
            imageUrl = result.secure_url

        }
        const product = new productModel({
            name,
            description,
            price,
            category,
            stock,
            imageUrl,
        })
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)

    } catch (err) {

        res.status(500).json({
            message: "Server Error"
        })

    }

}

// Update a Product only (Admin)

const updateProducts = async function (req, res) {

    try {

        const { name, description, price, category, stock } = req.body
        const product = await productModel.findById(req.params.id);
        if (product) {

            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;

            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path)
                console.log(result)
                product.imageUrl = result.secure_url
            }

            const updatedProduct = await product.save()
            res.json(updatedProduct)

        } else {
            res.status(404).json({
                message: "Product not found"
            })
        }



    } catch (err) {

        res.status(500).json({
            message: "Server Error"

        })
    }

}


// Delete a Product only (Admin)

const deleteProduct = async function (req,res){

    try{
        const product = await productModel.findById(req.params.id)
        if(product){
            await product.deleteOne()
            res.json({
                message: "Product Removed"
            })
        }else{
            res.json(404).json({
                message: "Product not found"
            })
        }
    }catch(err){

        res.status(500).json({
            message: "Server Error"
        })

    }

}

module.exports = { getProducts, getProductById, createProducts, updateProducts, deleteProduct }