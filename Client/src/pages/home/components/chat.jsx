import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewMessage, getAllMessages } from "../../../api_Calls/msg";
import { showLoader, hideLoader } from "../../../redux/loaderSlice";
import toast from "react-hot-toast";

function ChatArea() {
  const dispatch = useDispatch();
  const { selectedChat, user } = useSelector((state) => state.userReducer);
  const selectedUser = selectedChat?.members.find((u) => u._id !== user._id);
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages
    const NewMessage = {
      chatId: selectedChat._id,
      sender: user._id,
      text: message,
    };

    try {
      dispatch(showLoader());
      const response = await createNewMessage(NewMessage);
      dispatch(hideLoader());
      if (response.success) {
        setMessage(""); // Clear input field
        setAllMessages([...allMessages, response.data]); // Add new message to state
      }
    } catch (error) {
      dispatch(hideLoader());
      toast.error("Failed to send message");
      console.error("Error:", error);
    }
  };

  const getMessages = async () => {
    try {
      dispatch(showLoader());
      const response = await getAllMessages(selectedChat._id);
      dispatch(hideLoader());
      if (response.success) {
        setAllMessages(response.data);
      }
    } catch (error) {
      dispatch(hideLoader());
      toast.error("Failed to load messages");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (selectedChat) getMessages();
  }, [selectedChat]);

  return (
    <>
      {selectedChat && (
        <div className="app-chat-area">
          <div className="app-chat-area-header">
            {selectedUser &&
              `${selectedUser.firstname} ${selectedUser.lastname}`}
          </div>
          <div className="main-chat-area">
            {allMessages.map((msg, index) => (
              <div key={index} className="message">
                <strong>
                  {msg.sender.firstname} {msg.sender.lastname}
                </strong>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="send-message-div">
            <input
              type="text"
              className="send-message-input"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="fa fa-paper-plane send-message-btn"
              aria-hidden="true"
              onClick={sendMessage}
            ></button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatArea;
