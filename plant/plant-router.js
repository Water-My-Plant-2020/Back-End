const express = require('express');
const { addPlant } = require('./plant-model');
const router = express.Router();
const plants = require("./plant-model")

//GET PLANTS     /plants
router.get("/", (req, res) => {
    plants.getPlants()
    .then(plants => {
        res.status(200).json(plants)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get plant list." })
    })
})

//GET PLANTS BY ID    /plants/id
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

//UPDATE USERS BY ID     /plants/id
router.put("/:id", (req, res) => {
    if (!req.body.nickname || !req.body.speciesName) {
        return res.status(400).json({
            message: "Missing nickname or species name",
        })
    }
    plants.updatePlantsByID(req.params.id, req.body)
    .then((plant) => {
        if(plant) {
            res.status(200).json(plant)
        } else {
            res.status(404).json({ message: "The plant could not be found", })
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "Error updating the plant",
        })
    })
})

//ADD OR CREATE PLANTS, ID IS AUTOINCREMENTING     /plants
router.post('/', async (req,res, next) => {
     try {
		const data = await plants.addPlant(req.body)
		res.status(201).json(data)
	} catch(err) {
		next(err)
	}
})

//DELETE PLANTS BY ID   /plants/id
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    plants.removePlant(id).then(deleted => {
        if(deleted){
            res.json({removed: deleted})
        }else{
            res.status(404).json({message: 'no plant matching that ID exists'})
        }
    }).catch(err => {
        res.status(500).json({ message: 'an error has occurred' });
      });
})

module.exports = router;
