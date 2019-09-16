const bcrypt = require('bcryptjs'); 
const Users = require('../db-helper'); 

module.exports = function restricted(req, res, next) {
    const { username, password } = req.headers; 

    Users.getUserById({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password())) {
                next(); 
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
}