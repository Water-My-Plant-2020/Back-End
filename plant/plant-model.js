const db = require("../config")

function getPlants() {
    return db('plants')
}

function getPlantsByID(id) {
    return db('plants')
        .where({id})
        .first()
}

async function updatePlantsByID(id, changes) {
	await db("plants")
		.where({ id })
		.update(changes)

	return getPlantsByID(id)
}

function addPlant(newPlant) {
    return db('plants')
        .insert(newPlant)
}

function removePlant(id) {
    return db('plants')
        .where({ id })
        .del()
}

module.exports = {
	getPlants,
	getPlantsByID,
	updatePlantsByID,
    addPlant,
    removePlant,
}