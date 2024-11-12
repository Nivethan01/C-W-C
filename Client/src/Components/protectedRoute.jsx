import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getloggedInUser, getallUsers } from "./../api_Calls/users";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../redux/loaderSlice";
import { setUser, setAllUsers, setAllChats } from "../redux/userSlice";
import { getallChats } from "../api_Calls/chat";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLoggedInUser = async () => {
    let response = null;
    try {
      dispatch(showLoader());
      response = await getloggedInUser();
      dispatch(hideLoader());
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        toast.error(response.message);
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      dispatch(hideLoader());
      navigate("/login");
    }
  };

  const getAllUsers = async () => {
    let response = null;
    try {
      dispatch(showLoader());
      response = await getallUsers();
      dispatch(hideLoader());
      if (response.success) {
        dispatch(setAllUsers(response.data));
      } else {
        toast.error(response.message);
        window.location.href = "/login";
      }
    } catch (error) {}
  };

const getAllUserChats=async ()=>{
  try {
    const response=await getallChats();
    if(response.success){
      dispatch(setAllChats(response.data));
    }
  } catch (error) {
    navigate("/login");
  }
}

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUser();
      getAllUsers();
      getAllUserChats();
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
}
export default ProtectedRoute;
