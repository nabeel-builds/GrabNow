const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")

const router =  express.Router()

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.get("/users", authMiddleware.protect, adminMiddleware.admin, authController.getUsers)



module.exports = router