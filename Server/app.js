
const express = require("express");
const app = express();

// Example middleware and routes (optional)
app.use(express.json()); 
const authRouter=require("./controllers/authController")
const userRouter=require("./controllers/userController")
const chatRouter=require("./controllers/chatController")
const msgRouter=require("./controllers/messageController");
app.use(express.json())
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/msg',msgRouter);

//use auth controller

module.exports = app;
