const db = require("../config")

function getUsers() {
    return db('users')
}

function getUsersByID(id) {
    return db('users').where({id}).first()
}

async function updateUsersByID(id, changes) {
	await db("users")
		.where({ id })
		.update(changes)

	return getUsersByID(id)
}

function addUser(newUser) {
    return db('users').insert(newUser)
}

function removeUser(id) {
    return db('users').where({ id }).del()
}

module.exports = {
	getUsers,
	getUsersByID,
	updateUsersByID,
    addUser,
    removeUser,
}



//              ... ... ... #  2  .. .



// const db = require("../config")

// function getUser() {
//     return db("users")
// }

// async function add(user) {
//     const [id] = await db("user")
//     .insert(user)
// 	return findById(id)
// }

// function addUser(newUser) {
//     return db('user').insert(newUser)
// }

// function find() {
//     return db("user")
//     .select("id", "username")
// }

// function findBy(filter) {
// 	return db("user")
// 		.select("id", "username", "password")
// 		.where(filter)
// }

// function findById(id) {
// 	return db("user")
// 		.select("id", "username")
// 		.where({ id })
// 		.first()
// }

// module.exports = {
//     add,
//     addUser,
// 	find,
// 	findBy,
//     findById,
//     getUser,
// }




