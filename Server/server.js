// server.js
const dotenv = require('dotenv');
const dpconfig=require('./config/dbConfib');
const cors = require('cors');
dotenv.config({ path: './config.env' });
const authRouter=require("./controllers/authController")
const userRouter=require("./controllers/userController")
const chatRouter=require("./controllers/chatController")
const msgRouter=require("./controllers/messageController");
const express = require("express");
const app = express();
dpconfig();
app.use(cors());
app.use(express.json());

//public router
app.use('/api/auth',authRouter);

//private router
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/msg',msgRouter);


const port = process.env.PORT_NUM;

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
        process.exit(1); 
    }
    console.log(`App started on port: ${port}`);
})