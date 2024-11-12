import {axiosInstance} from './index';
  

export const  createNewMessage=async(message)=>{
    try {
        const response=await axiosInstance.post('api/msg/new-msg',message);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const  getAllMessages=async(chatId)=>{
    try {
        const response=await axiosInstance.get(`api/msg/get-all-msgs/${chatId}`);
        return response.data;
    } catch (error) {
        return error;
    }
}