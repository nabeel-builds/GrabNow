const orderModal = require("../models/order.model")
const sendEmail = require("../services/sendEmail.service")



const createOrders = async function (req, res) {

    try {

        const { items, totalAmount, address, paymentId } = req.body
        
        if (!items || items.length === 0 || !totalAmount || !address) {
            return res.status(400).json({
                message: "Inavlid Order data"
            })
        } else {
            const order = new orderModal({
                user: req.user._id,
                items,
                totalAmount,
                address,
                paymentId
            })
            await order.save()

            const message = `Dear ${req.user.name},\n\nThank you for your order! Your order has been successfully created with the following details:\n\nOrder ID: ${order._id}\nTotal Amount: ${totalAmount}\n Shipping Address: ${address}\n\nWe will notify once your order is shipped.\n\nBest regards,\nGrabNow Team`;


            await sendEmail(req.user.email, "Order Created", message),

                res.status(201).json({
                    message: "Order created successfully",
                    order
                })
        }

    } catch (err) {
        res.status(500).json({
            message: "Error creating order",
            err
        })
    }

}




const getAllOrders = async function (req, res) {

    try {

        const orders = await orderModal.find({}).populate("user", "id name");
        res.json(orders)

    } catch (err) {

        res.status(500).json({
            message: "Error fetching orders",
            err
        })

    }

}



const getOrderById = async function (req, res) {

    try {

        const orders = await orderModal.find({ user: req.user._id }).populate("items.productId", "name price")
        res.json(orders)

    } catch (err) {

        res.status(500).json({
            message: "Error fetching orders",
            err
        })

    }

}

const updateOrderStatus = async function (req, res) {

    try {

        const { status } = req.body;
        const order = await orderModal.findById(req.params.id);
        if (order) {
            order.status = status
            await order.save()
            res.json({
                message: "Order status updated",
                order
            })
        } else {
            res.status(404).json({
                message: "Order not found"
            })
        }

    } catch (err) {

        res.status(500).json({
            message: "Error updating order status",
            err
        })

    }

}

module.exports = { createOrders, getOrderById, getAllOrders, updateOrderStatus }