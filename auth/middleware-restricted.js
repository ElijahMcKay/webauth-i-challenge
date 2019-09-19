const bcrypt = require('bcryptjs'); 
const Users = require('../db-helper'); 

module.exports = function restricted(req, res, next) {
    if(req.session && req.session.user) {
        next(); 
    } else {
        res.status(401).json({ message: "not authorized" })
    }

}