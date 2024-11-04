import { axiosInstance } from "./index";
export const signUpUser = async (User) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", User);
    return response.data;
  } catch (err) {
    return err;
  }
};
export const loginUser = async (User) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", User);
    return response.data;
  } catch (err) {
    console.log(err);
    
    return err;
  }
};
