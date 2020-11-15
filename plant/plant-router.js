const express = require('express');
const router = express.Router();
const plants = require("./plant-model")

router.get("/", (req, res) => {
    plants.getPlants()
    .then(plants => {
        res.status(200).json(plants)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get plant list." })
    })
})


module.exports = router;