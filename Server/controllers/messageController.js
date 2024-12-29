const route = require("express").Router();
const authMiddleware = require("./../Middlewares/authMiddleware");
const Chat = require("./../models/chart");
// const message = require('./../models/message');
const Message = require("./../models/message");
route.post("/new-msg", authMiddleware, async (req, res) => {
  try {
    //Store the message in msg collection
    const newMsg = new Message(req.body);
    const savedMsg = await newMsg.save();

    //update the lastMessage in chat collection
    const currentChat = await Chat.findOneAndUpdate(
      { _id: req.body.chatId },
      {
        lastMessage: savedMsg._id,
        $inc: { unreadMessageCount: 1 },
      },
      { new: true } // Ensures the updated document is returned
    );
    if (!currentChat) {
        return res.status(404).send({
          message: "Chat not found.",
          success: false,
        });
      }
    console.log("Updated Chat:", currentChat);

    res.status(201).send({
      message: "Send Successfully",
      success: true,
      data: savedMsg,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});

route.get("/get-all-msgs/:chatId", authMiddleware, async (req, res) => {
  try {
    const allMessages = await Message.find({ chatId: req.params.chatId }).sort({
      createdAt: 1,
    });
    res.send({
      message: "Message sended successfully",
      success: true,
      data: allMessages,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});
module.exports = route;
