const express = require('express');
const { addPlant } = require('./plant-model');
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

router.post('/', async (req,res, next) => {
     try {
		const data = await plants.addPlant(req.body)
		res.status(201).json(data)
	} catch(err) {
		next(err)
	}
})

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