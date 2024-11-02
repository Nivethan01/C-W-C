import { axiosInstance } from "./index";

export const getloggedInUser = async () => {
  try {
    const response = await axiosInstance.get("api/user/get-logged-user");
    // Check if the response and response.data are valid
    console.log(response);
    
    if (response && response.data && response.data.success) {
      return response.data;
    } else {
      // Throw an error if the expected structure is missing
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return { error: error.message || "Unknown error" };
  }
};
