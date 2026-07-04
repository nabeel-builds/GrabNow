const jwt = require("jsonwebtoken")
const userModal = require("../models/user.model")

const protect = async (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModal.findById(decoded.id).select("-password")

            // If user is not present in DB then (re run the seed.js)
            if (!req.user) {
                return res.status(400).json({
                    message: 'User no longer exists'
                })
            }
            return next()
        } catch (err) {

            return res.status(401).json({
                message: "Not authorized, token failed"
            })

        }
    }
    if (!token) {
        return res.status(401).json({
            message: "Not authorized, no token"
        })
    }

}



module.exports = { protect }