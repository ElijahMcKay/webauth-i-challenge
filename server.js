const express = require('express'); 
const userRouter = require('./user/userRouter'); 

const server = express(); 

server.use(json()); 
server.use('/api', userRouter); 

module.exports = server; 