const db = require('./db-config'); 

module.exports = {
    getUsers,
    getUserByUsername,
    addUser
}

function getUsers() {
    return db('users'); 
}

function getUserByUsername(username) {
    // console.log(username); 
    return db('users').where({ username: username }).first(); 
}

function addUser(user) {
    return db('users').insert(user); 
}