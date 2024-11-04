import { axiosInstance } from "./index";
export const getloggedInUser = async () => {
  try {
    const response = await axiosInstance.get("api/user/get-logged-user");
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
