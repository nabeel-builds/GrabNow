const app = require("./src/app")
const connectDB = require("./src/config/db")
const cors = require('cors')

app.use(cors({
    origin: 'https://grab-now-iota.vercel.app',
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

connectDB()

app.listen("3000", () => {
    console.log("Server is running on port 3000")
})