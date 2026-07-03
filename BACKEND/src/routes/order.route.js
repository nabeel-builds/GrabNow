const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const adminMiddleware = require("../middlewares/admin.middleware")
const orderController = require("../controllers/order.controller")


const router = express.Router()


router.route("/").post(authMiddleware.protect, orderController.createOrders).get(authMiddleware.protect, adminMiddleware.admin, orderController.getAllOrders)

router.route("/myorders").get(authMiddleware.protect, orderController.getOrderById)

router.route("/:id/status").put(authMiddleware.protect, adminMiddleware.admin, orderController.updateOrderStatus)


module.exports = router