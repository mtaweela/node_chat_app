const socketIO = require("socket.io");

const socketHandler = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("new user connected.");

    socket.emit("newEmail", {
      from: "me@me.com",
      to: "you@you.com",
      text: "to you",
    });

    socket.on("createEmail", (newEmail) => {
      console.log("createEmail", newEmail);

      io.emit("newEmail", {
        ...newEmail,
        createdAt: new Date().getTime(),
      });
    });

    socket.on("disconnect", () => {
      console.log("user was disconnected.");
    });
  });
};

module.exports = { socketHandler };
