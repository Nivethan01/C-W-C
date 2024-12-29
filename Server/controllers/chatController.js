const router = require("express").Router();
const authMiddleware = require("../Middlewares/authMiddleware");
const Chat = require("../models/chart");
const Message = require("../models/message");

router.post("/create-new-chat", authMiddleware, async (req, res) => {
  try {
    const chat = new Chat(req.body);
    const savedChat = await chat.save();

    await savedChat.populate("members");

    res.status(201).send({
      message: "Chat created successfully",
      success: true,
      data: savedChat,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});

router.get("/get-all-chats", authMiddleware, async (req, res) => {
  try {
    const Allchats = await Chat.find({ members: { $in: req.body.userId } })
      .populate("members")
      .populate("lastMessage") //object id of lst msg
      .sort({ updatedAt: -1 }); //fetch member document full
    res.status(200).send({
      message: "Chat fetched successfully",
      success: true,
      data: Allchats,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/clear-unread-msg", authMiddleware, async (req, res) => {
  try {
    const chatId = req.body.chatId;
    const chat = await Chat.findById(chatId);
    if (!chat) {
      res.send({
        message: "Chat not found",
        success: false,
      });
    }
    const updatedChat =await Chat.findByIdAndUpdate(
      chatId,
      {
        unreadMessageCount: 0,
      },
      {
        new: true,
      }
    )
      .populate("members")
      .populate("lastMessage");
    //we want to update the unread message count in chat collection
    
    await Message.updateMany({ chatId: chatId, read: false }, { read: true });
    res.status(200).send({
      message: "Unread message cleared successfully",
      success: true,
      data: updatedChat,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});
module.exports = router;
