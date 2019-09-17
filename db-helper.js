const db = require('./db-config'); 

module.exports = {
    getUsers,
    // getUserByUsername,
    addUser,
    findBy
}

function getUsers() {
    return db('users'); 
}

function getUserByUsername(username) {
    return db('users').where({ username: username }).first(); 
}

function findBy(filter) {
    return db('users').where(filter);
}

function addUser(user) {
    return db('users').insert(user); 
}