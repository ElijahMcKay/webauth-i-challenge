const db = require('./db-config'); 

module.exports = {
    getUsers,
    addUser
}

function getUsers() {
    return db('users'); 
}

function addUser(user) {
    return db('users').insert(user); 
}