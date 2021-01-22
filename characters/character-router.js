const express = require("express")
const { userParams } = require("../data/config")
const Characters = require("./character-model")

const router = express.Router()

router.get("/characters", async (req, res, next) => {
    try{
        res.json(await Characters.find())
    } catch(err) {
        next(err)
    }
})

router.post("/characters", async (req, res, next) => {
    try {
        const character = await Characters.add(req.body)
        res.status(201).json(character)
    } catch(err) {
        next(err)
    }
})

router.delete("/characters/:id", async (req, res, next) => {
    try {
       Characters.remove(req.params.id)
       .then((count) => {
           if (count > 0) {
               res.status(200).json({
                   message: "Character has been deleted!"
               })
           }
       })
    } catch(err) {
        next(err)
    }
})

module.exports = router