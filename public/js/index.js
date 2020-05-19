const socket = io();

socket.on("connect", () => {
  console.log("connected to the server.");

  socket.emit("createEmail", {
    to: "you",
    text: "new new new",
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected to the server.");
});

socket.on("newEmail", (email) => {
  console.log("new Email", email);
});
