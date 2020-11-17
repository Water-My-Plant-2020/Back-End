const bcrypt = require("bcryptjs")
const Plant = require("./plant-model")

function restrict() {
	// Create a middleware function that restricts routes to authorized users only.
	// It should get the username and password from the request headers.


	//create a middleware function that restricts the Get/users route to authorized user only
	// it should get the username and password from the request headers
	return async (req, res, next) => {
		try {
			

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
