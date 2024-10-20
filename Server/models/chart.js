const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Ensure 'users' model exists
        required: true
    }],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    },
    unreadMessageCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('chats', chatSchema);
