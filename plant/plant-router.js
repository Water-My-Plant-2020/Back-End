const express = require('express');
const router = express.Router();
const plant = require("./plant-model")

router.get("/", (req, res) => {
    plant.getPlants()
    .then(plant => {
        res.status(200).json(plant)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get plant list." })
    })
})


module.exports = router;