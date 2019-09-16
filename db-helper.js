const db = require('./db-config'); 

module.exports = {
    getUsers,
    getUserById,
    addUser
}

function getUsers() {
    return db('users'); 
}

function getUserById(id) {
    return db('users').where(id); 
}

function addUser(user) {
    return db('users').insert(user); 
}