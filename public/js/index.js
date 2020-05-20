const socket = io();

socket.on("connect", () => {
  console.log("connected to the server.");

  socket.emit(
    "createMessage",
    {
      from: "you",
      text: "new new new",
    },
    (data) => {
      console.log("server got it.", data);
    }
  );
});

socket.on("disconnect", () => {
  console.log("Disconnected to the server.");
});

socket.on("newMessage", (email) => {
  console.log("new Email", email);
});
