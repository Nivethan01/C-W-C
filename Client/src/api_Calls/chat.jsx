import { axiosInstance } from "./index";
export const getallChats = async () => {
  try {
    const response = await axiosInstance.get("api/chat/get-all-chats");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createNewChat = async (members) => {
  try {
    const response = await axiosInstance.post("api/chat/create-new-chat", {
      members,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const clearedUnreadMsgCnt = async (chatId) => {
  try {
    const response = await axiosInstance.post("api/chat/clear-unread-msg", {
      chatId: chatId,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
