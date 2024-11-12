const router = require("express").Router();
const authMiddleware = require("../Middlewares/authMiddleware");
const Chat = require("../models/chart"); // Ensure correct import

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
    const Allchats = await Chat.find({ members: { $in: req.body.userId } }).populate('members').sort({updatedAt: -1});  //fetch member document full
    res.status(200).send({
      message: "Chat fetched successfully",
      success: true,
      data: Allchats,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
