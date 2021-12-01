const net = require("net");
const clients = require("./client")

// establishes a connection with the game server

console.log("Connecting ...");
clients.connection()