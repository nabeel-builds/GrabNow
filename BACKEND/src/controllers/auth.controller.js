const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const sendEmail = require("../services/sendEmail.service")

// 4. Generate the JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

/**
 * - Register a User
 */

const registerUser = async function (req, res) {

    const { name, email, password } = req.body

    try {
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }

        // 1. Hashed the Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await userModel.create({ name, email, password: hashedPassword })

        if (user) {

            // 2. Genearte the OTP
            const otp = Math.floor(100000 + Math.random() * 900000).toString()

            // 3. Generate the Email
            const message = `Welcome to GrabNow, ${name}! Thank you for registaring with us. We are excited to have you as part of our community. To complete your registration please use the following One-Time Password (OTP): Your OTP for registration is: ${otp}`

            await sendEmail(email, "Welcome to GrabNow - Your OTP for registration", message)

            return res.status(201).json({
                message: "User registerd successfully. Please check your email for the OTP.",
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            })
        } else {
            return res.status(400).json({
                message: "Invalid user data"
            })
        }
    }
    catch (err) {
        return res.status(201).json({
            message:"Server Error",
            Error: err.message
        })
    }


}

/**
 * - Login a User
 */

const loginUser = async function (req, res) {

    const { email, password } = req.body

    try {

        const user = await userModel.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            return res.json({
                message:"User Login Successfully",
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            })
        } else {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

    } catch (err) {

        return res.status(500).json({
            message: "Server error"
        })

    }

}


const getUsers = async function (req, res) {

    try {

        const users = await userModel.find({}).select("-password")
        res.json(users)

    } catch (err) {

        res.status(500).json({
            message: "Server error"
        })

    }

}


module.exports = { registerUser, loginUser, getUsers }