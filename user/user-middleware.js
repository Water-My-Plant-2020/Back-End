const bcrypt = require("bcryptjs")
const Users = require("./user-model")

function restrict() {
	// Create a middleware function that restricts routes to authorized users only.
	// It should get the username and password from the request headers.


	//create a middleware function that restricts the Get/users route to authorized user only
	// it should get the username and password from the request headers
	return async (req, res, next) => {
		try {
			const { username, password } = req.headers

			//check the username and password before moving on
			if (!username || !password) {
				return res.status(401).json ({
					message: "invalid"
				})
			}
			const user = await Users.findBy({ username }).first()
			if (!user) {
				return res.status(401).json({
					message: "invalid"
				})
			}
			const passwordValid = await bcrypt.compare(password, user.password)

			if (!passwordValid) {
				return res.status(401).json({
					message: "invalid"
				})
			}


			if(!req.session || !req.session.user) {
				return res.status(401).json({
					message: "invalid"
				})
			}

			//everything validated, were good to go

			next()

		} catch(err) {
			next(err)
		}
	}
}


module.exports = {
	restrict,
} 


// const userDb = require('../users/userDb')

// function validateUserId() {
//     return (req, res, next) => {
//         userDb.getById(req.params.id)
//         .then((user) => {
//             if (user) {
//                 req.user = user
//                 next()
//             } else {
//                 res.status(404).json({
//                     message: "User not found"
//                 })
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//             res.status(500).json({
//                 message: "Error retrieving the user"
//             })
//         })
//     }
// }

// function validateUser() {
//     return (req, res, next) => {
//         if (!req.body.name) {
//             return res.status(400).json({
//                 message: "Missing user name or email",
//             })
//         }
//         next()
//     }
// }

// function validatePost() {
//     return (req, res, next) => {
//         if (!req.body.text) {
//             return res.status(400).json({
//                 message: "Need a value for text",
//             })
//         }
//         next()
//     }
// }

// module.exports = {
//     validateUserId,
//     validateUser,
//     validatePost
// }