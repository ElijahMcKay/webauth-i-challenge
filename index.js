const server = require('./server'); 

const PORT = env.process.PORT || 5000; 

server.listen(PORT, () => `Server listening on port ${PORT}.`)