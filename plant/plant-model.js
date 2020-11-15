const db = require("../config")

function getPlants() {
    return db('plants')
}

function getPlantsByID(id) {
    return db('plants').where({id}).first()
}

function addPlant(newPlant) {
    return db('plants').insert(newPlant)
}

function removePlant(id) {
    return db('plants').where({ id }).del()
}

module.exports = {
	getPlants,
    getPlantsByID,
    addPlant,
    removePlant,
}