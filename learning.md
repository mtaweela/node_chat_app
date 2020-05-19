connect to server

```javascript
const io = socketIO(server);
io.on("connection", (socket) => {
  // handle connection
  console.log("new user connected.");

  // emit new event
  socket.emit("newEmail", {
    from: "me@me.com",
    to: "you@you.com",
    text: "to you",
  });

  // listen on specific event
  socket.on("createEmail", (newEmail) => {
    console.log("createEmail", newEmail);

    // emit event to all users
    io.emit("newEmail", {
      ...newEmail,
      createdAt: new Date().getTime(),
    });

    // broadcast message to all sockets connected except me
    socket.broadcast.emit("newEmail", {
      ...newEmail,
      createdAt: new Date().getTime(),
    });
  });

  socket.on("disconnect", () => {
    console.log("user was disconnected.");
  });
});
```
