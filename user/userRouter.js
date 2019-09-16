const express = require('express'); 
const restricted = require('../auth/middleware-restricted');  
const bcrypt = require('bcryptjs'); 

const Users = require('../db-helper'); 

const router = express.Router(); 


//get requests
router.get('/users', restricted, (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

//post requests
router.post('/register', (req, res) => {
    const body = req.body

    let hash = bcrypt.hashSync(body.password, 12); 

    body.password = hash; 

    Users.addUser(body)
        .then(user => {
            res.status(201).json(user); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    Users.getUserById({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}`})
            } else {
                res.status(401).json({ message: `Invalid login attempt`})
            }
        })
})

module.exports = router; 