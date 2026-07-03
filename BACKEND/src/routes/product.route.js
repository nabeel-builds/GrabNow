const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")
const productController = require("../controllers/product.controller")
const multer = require("multer")
const upload = multer({dest: "uploads/"})


const router = express.Router()

// Get All Products
router.route("/").get(productController.getProducts).post(authMiddleware.protect, adminMiddleware.admin, upload.single("image"), productController.createProducts)

// Get Single Product
router.route("/:id").get(productController.getProductById).put(authMiddleware.protect, adminMiddleware.admin,upload.single("image"), productController.updateProducts).delete(authMiddleware.protect, adminMiddleware.admin, productController.deleteProduct)


module.exports = router