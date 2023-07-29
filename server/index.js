import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", documnetId => {

    const data ="";
    socket.join(documnetId);
        socket.emit('load-document', data);


    socket.on('send-changes', delta => {
        socket.broadcast.to(documnetId).emit('receive-changes', delta);
    });
  });

  console.log("connected");
});
