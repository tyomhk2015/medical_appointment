// Backend(or Server)

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// socketIO admin.
const {instrument} = require("@socket.io/admin-ui");

const app = express();

// Set server
const httpServer = http.createServer(app);
const socketIOserver = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

socketIOserver.on("connection", (socket) => {
  socket["nickname"] = "Anon";

  console.log(socket.id);
});

httpServer.listen(8888, () => console.log('Activated the E-Card server.'));