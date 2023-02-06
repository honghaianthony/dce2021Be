#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('web-be:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/** 
  add socket.io
  */
// add socket.io server
const { Server } = require('socket.io');
const option = {
    // path: "/chat",
    serveClient: true,
    connectTimeout: 30000,
    cors: {
        origin: ['http://localhost:3001', 'https://dce2021.ml'],
        methods: ['GET', 'POST'],
        // allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
};
const io = new Server(server, option);

const registerHandler = require('./src/realtime/handler');

const onConnection = (socket) => {
    // console.log(`User Connected: ${socket.id}`);
    registerHandler(io, socket);
    socket.on('disconnect', () => {
        // console.log("User Disconnected", socket.id);
    });
};

io.on('connection', onConnection);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    console.log(
        `Server listening on port ${port} go to http://localhost:${port}/docs/ for document`,
    );
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
