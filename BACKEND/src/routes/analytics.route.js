const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")
const analyticsController = require("../controllers/analytics.controller")


const router = express.Router()

router.get("/", authMiddleware.protect, adminMiddleware.admin, analyticsController.getAdminStats)

module.exports = router