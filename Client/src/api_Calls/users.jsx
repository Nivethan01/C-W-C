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
export const getallUsers = async () => {
  try {
    const response = await axiosInstance.get("api/user/get-all-users");
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
