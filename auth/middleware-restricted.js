const bcrypt = require('bcryptjs'); 
const Users = require('../db-helper'); 

module.exports = function restricted(req, res, next) {
    const { username, password } = req.headers;     

    if(username && password) {
        Users.getUserByUsername(username)
        .then(user => {
            console.log(user); 
            console.log(password); 
            console.log(user.password); 
            console.log(bcrypt.compareSync(password, user.password))
            if(user && bcrypt.compareSync(password, user.password)/*password === user.password*/) {
                next();
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(err => {
            // console.log(username)
            res.status(500).json({ error: err })  
        })
    } else {
        res.status(500).json({ message: "headers not present" })
    }

}