const express = require("express")
const cors = require("cors")
const plantRouter = require("./plant/plant-router")
const userRouter = require("./user/user-router")
const authRouter = require("./auth/auth-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/", authRouter)
server.use("/plants", plantRouter)
server.use("/users", userRouter)


server.get("/", (req, res) => {
    res.json({
        message: "Welcome to our plants and user API",
    })
    
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server