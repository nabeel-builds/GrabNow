const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const authRoutes = require("./routes/auth.route")
const productRoutes = require("./routes/product.route")
const orderRoutes = require("./routes/order.route")
const paymentRoutes = require("./routes/payment.route")
const analyticsRoutes = require("./routes/analytics.route")

const app = express()

app.use(cors({
    origin: 'https://grab-now-iota.vercel.app',
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Backend is Working")
})

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/payments", paymentRoutes)
app.use("/api/analytics", analyticsRoutes)

module.exports = app