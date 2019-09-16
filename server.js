const express = require('express'); 
const userRouter = require('./user/userRouter'); 

const server = express(); 

server.use(express.json()); 
server.use('/api', userRouter); 

module.exports = server; 