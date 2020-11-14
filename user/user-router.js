const express = require("express")
const bcrypt = require("bcryptjs")
const Users = require("./users-model")
const { restrict } = require("./users-middleware")

const router = express.Router()
// add the restrict fucntion to continue
router.get("/users", restrict(), async (req, res, next) => {
	try {
		res.json(await Users.find())
	} catch(err) {
		next(err)
	}
})

router.post("/register", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await Users.add({
			username,
			//hash the password with a time complexity of 10 or greater
			//password,
			password: await bcrypt.hash(password, 14)
		})

		res.status(201).json(newUser)
	} catch(err) {
		next(err)
	}
})

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await Users.findBy({ username }).first()
		// why does this not work
		// if (!user || user.password !== password{
		//  look below })

		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		//move this below the user check
		const passwordValid = await bcrypt.compare(password, user.password)

		if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials"
			})
		}
		// will
		req.session.user = user

		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})

router.get("/logout", async (req, res, next) => {
	try {
		// deletes the session on the server-side, so the user is no longer authenticated
		req.session.destroy((err) => {
			if (err) {
				next(err)
			} else {
				res.status(204).end()
			}
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router




// const express = require('express')
// const userDb = require('./userDb')
// const postDb = require('../posts/postDb')
// const { 
//   validateUserId,
//   validateUser,
//   validatePost } = require('../middleware/user');
// const router = express.Router();

// router.post('/users', validateUser(), (req, res) => {
//   userDb.insert(req.body)
//     .then((user) => {
//       res.status(201).json(user)
//     })
//     .catch((error) => {
//       next(error)
//     })
// });

// router.post('/users/:id/posts', validatePost(), validateUserId(), (req, res) => {
//   postDb.insert(req.params.id, req.body)
//     .then((post) => {
//       res.status(200).json(post)
//     })
//     .catch((error) => {
//       next(error)
//     })
// });

// router.get('/users', (req, res) => {
// 	userDb.get()
// 		.then((users) => {
// 			res.status(200).json(users)
// 		})
// 		.catch((error) => {
// 			next(error)
// 		})
// });

// router.get('/users/:id', validateUserId(), (req, res) => {
//   res.status(200).json(req.user)
// });

// router.get('/users/:id/posts', validateUserId(), (req, res) => {
//   userDb.getUserPosts(req.params.id)
//     .then((posts) => {
//       res.status(200).json(posts)
//     })
//     .catch(() => {
//       next(error)
//     })
// });

// router.delete('/users/:id', validateUserId(), (req, res) => {
//   userDb.remove(req.params.id)
//     .then(() => {
//       res.status(200).json({
//         message: "The user has been deleted"
//       })
//     })
//     .catch((error) => {
//       next(error)
//     })
// });

// router.put('/users/:id', validateUser(), validateUserId(), (req, res) => {
//   userDb.update(req.params.id, req.body)
//     .then(() => {
//       res.status(200).json({
//         message: "The user name has been successfully changed"
//       })
//     })
//     .catch((error) => {
//       next(error)
//     })
// });

// //custom middleware

// // function validateUserId(req, res, next) {
// //   // do your magic!
// // }

// // function validateUser(req, res, next) {
// //   // do your magic!
// // }

// // function validatePost(req, res, next) {
// //   // do your magic!
// // }

// module.exports = router;



//.........example...
// const express = require('express');

// const server = express();

// server.get('/', (req, res) => {
//   res.send('Hello World');
// });

// server.get('/hobbits', (req, res) => {
//   const hobbits = [
//     {
//       id: 1,
//       name: 'Samwise Gamgee',
//     },
//     {
//       id: 2,
//       name: 'Frodo Baggins',
//     },
//   ];

//   res.status(200).json(hobbits);
// });

// server.listen(8000, () => console.log('API running on port 8000'));



// ....more...

// // this request handler executes when making a GET request to /about
// server.get('/about', (req, res) => {
//     res.status(200).send('<h1>About Us</h1>');
//   });
  
//   // this request handler executes when making a GET request to /contact
//   server.get('/contact', (req, res) => {
//     res.status(200).send('<h1>Contact Form</h1>');
//   });
  