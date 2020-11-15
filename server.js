const express = require("express")
const cors = require("cors")
const plantRouter = require("./plant/plant-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/plant", plantRouter)

server.get("/", (req, res) => {
    res.json({
        message: "Welcome to our plants API",
    })
    
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server