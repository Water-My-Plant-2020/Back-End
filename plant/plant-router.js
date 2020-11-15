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

router.get("/:id", (req, res) => {
    plants.getPlantsByID(req.params.id)
    .then(plants => {
       if(plants){
           res.json(plants)
       } else {
           res.status(404).json({ message: "There are no plants that match that ID" })
       }
    })
    .catch(err => {
        res.status(500).json({message: "An error has occurred"})
    })
})


module.exports = router;
