const path = require("path");
const http = require("http");
const express = require("express");

const { socketHandler } = require("./sockets/socket.handler");

const publicPath = path.join(__dirname, "../public");
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

socketHandler(server);
app.use(express.static(publicPath));

server.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
