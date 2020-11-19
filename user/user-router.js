
const express = require('express');
const { addUser } = require('./user-model');
const router = express.Router();
const users = require("./user-model")
// const { restrict } = require("./user-middleware")


//.....get ... /user

router.get("/", (req, res) => {
    users.getUsers()
    .then(users => {
        res.status(200).json(users)
    }) 
    .catch(err => {
        res.status(500).json({ message: "Cannot get user list." })
    })
})


// .....get .... /user/id .....


router.get("/:id", (req, res) => {
    users.getUsersByID(req.params.id)
    .then(users => {
       if(users){
           res.json(users)
       } else {
           res.status(404).json({ message: "There are no users that match that ID" })
       }
    })
    .catch(err => {
        res.status(500).json({message: "An error has occurred"})
    })
})


// .... put ... /user/id  .... 



router.put("/:id", (req, res) => {
    if (!req.body.username || !req.body.phoneNumber) {
        return res.status(400).json({
            message: "Missing username or phone Number",
        })
    }
    users.updateUsersByID(req.params.id, req.body)
    .then((user) => {
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: "The user could not be found", })
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "Error updating the user",
        })
    })
})



router.post('/', async (req,res, next) => {
     try {
		const data = await users.addUser(req.body)
		res.status(201).json(data)
	} catch(err) {
		next(err)
	}
})

// router.delete('/:id', (req,res) => {
//     const {id} = req.params;
//     users.removeUser(id).then(deleted => {
//         if(deleted){
//             res.json({removed: deleted})
//         }else{
//             res.status(404).json({message: 'no user matching that ID exists'})
//         }
//     }).catch(err => {
//         res.status(500).json({ message: 'an error has occurred' });
//       });
// })

router.post("/login", async (req, res, next) => {
    console.log("help",req.body);
	try {
		const { username, password } = req.body
        const user = await Users
        .getUsers({ username })

        .first()
        console.log("user",user)
		// why does this not work
		// if (!user || user.password !== password{
		//  look below })

		
		if (!user) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
		}
		//move this below the user check
        const passwordValid = await bcrypt
        .compare(password, user.password)

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

module.exports = router;





