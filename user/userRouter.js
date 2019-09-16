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
    Users.addUser()
        .then(user => {
            res.status(201).json(user); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

router.post('/login', (req, res) => {
    Users.
})

module.exports = router; 