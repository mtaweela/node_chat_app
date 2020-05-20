const socketIO = require("socket.io");
const { generateMessage } = require("../utils/message");

const socketHandler = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("new user connected.");

    socket.emit("newMessage", generateMessage("Admin", "welcome to chat app."));
    socket.broadcast.emit(
      "newMessage",
      generateMessage("Admin", "new user joined.")
    );

    socket.on("createMessage", (message, callback) => {
      console.log("createMessage", message);

      socket.broadcast.emit(
        "newMessage",
        generateMessage(message.from, message.text)
      );

      callback("this is from the server.");
    });

    socket.on("disconnect", () => {
      console.log("user was disconnected.");
    });
  });
};

module.exports = { socketHandler };
