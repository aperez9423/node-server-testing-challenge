const express = require("express")
const charactersRouter = require("./characters/character-router")

const server = express()

server.use(express.json())
server.use(charactersRouter)

server.get ("/", (req, res) => {
    res.json({
        message: "Welcome to our API!",
    })
}) 

server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "Something went wrong!",
    })
})

module.exports = server