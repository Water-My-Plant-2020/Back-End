const db = require("../config")

function getUsers() {
    return db('users')
}

function getUsersByID(id) {
    return db('users')
        .where({id})
        .first()
}

async function updateUsersByID(id, changes) {
	await db("users")
        .where({ id })
        .update(changes)

	return getUsersByID(id)
}

function addUser(newUser) {
    return db('users')
        .insert(newUser)
}

function removeUser(id) {
    return db('users')
        .where({ id })
        .del()
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .orderBy('id')

}
module.exports = {
	getUsers,
	getUsersByID,
	updateUsersByID,
    addUser,
    removeUser,
    findBy,
}



