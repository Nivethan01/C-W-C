const dotenv = require("dotenv");
const dpconfig = require("./config/dbConfib");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const authRouter = require("./controllers/authController");
const userRouter = require("./controllers/userController");
const chatRouter = require("./controllers/chatController");
const msgRouter = require("./controllers/messageController");
const express = require("express");
const app = express();
dpconfig();

// Define allowed origins
const allowedOrigins = ["http://localhost:5173"];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// HTTP server setup
const server = require("http").createServer(app);

// Socket.IO server setup with CORS
const io = require("socket.io")(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

// Public router
app.use("/api/auth", authRouter);

// Private router
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/msg", msgRouter);

// Test socket connection
io.on("connection", (socket) => {
  //   console.log("A user connected with socket ID:", socket.id);
  socket.on("send-message-all", (data) => {
    socket.emit("send-message-by-server", "Message from server:" + data.text);
  });
});

const port = process.env.PORT_NUM;

// Start the server
server.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
  console.log(`App started on port: ${port}`);
});
