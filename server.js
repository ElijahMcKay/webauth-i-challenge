const express = require('express'); 
const userRouter = require('./user/userRouter'); 
const session = require('express-session'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

const server = express(); 


// const sessionConfig = {
//     name: 'monkey',
//     secret: 'Happy mothers day!',
//     cookie: {
//         maxAge: 1000 * 300,
//         secure: false, // should be switched to true for production, false for developemnt
//         httpOnly: true,
//     },
//     resave: false,
//     saveUninitialized: true, // DDPR laws against setting cookies automatically (USER MUST OPT INTO THIS)
// }

const sessionConfig = {
    name: 'monkey', 
    secret: 'Happy mothers day!', 
    cookie: {
        maxAge: 1000 * 30,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
}
// const sessionConfig = {
//     name: 'monkey', // sid
//     secret: 'keep it secret, keep it safe!',
//     cookie: {
//         maxAge: 1000 * 300, // 300 seconds
//         secure: false, // TRUE in production
//         httpOnly: true,
//     },
//     resave: false,
//     saveUninitialized: true, // GDPR laws against setting cookies automatically
//     // store: new KnexSessionStore({
//     //     knex: knexConnection,
//     //     createtable: true,
//     //     clearInterval: 1000 * 600, // How long before expired sessions delete: 30 mins
//     // })
// }
server.use(cors())
server.use(helmet())
//configuring session
server.use(session(sessionConfig)); 
server.use(express.json()); 
server.use('/api', userRouter); 


module.exports = server; 