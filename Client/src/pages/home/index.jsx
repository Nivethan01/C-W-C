import Header from "./components/header";
import SideBar from "./SideBar.jsx";
import ChatArea from "./components/chat.jsx";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";

function Home() {
  const { selectedChat } = useSelector((state) => state.userReducer);
  const socket = io("http://localhost:5000");
  useEffect(() => {
    socket.emit("send-message-all", { text: "Hi from Nivethan" });
    socket.on('send-message-by-server',data=>{
      console.log(data);
    })
  }, []);
  return (
    <div className="home-page">
      <Header></Header>
      {/* <button onClick>learn</button> */}
      <div className="main-content">
        <SideBar></SideBar>
        {selectedChat && <ChatArea></ChatArea>}
        {/* <!--CHAT AREA LAYOUT--> */}
      </div>
    </div>
  );
}

export default Home;
