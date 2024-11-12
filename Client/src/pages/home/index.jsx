import Header from "./components/header";
import SideBar from "./SideBar.jsx";
import ChatArea from './components/chat.jsx'
import Learn from "./../Learn/learn.jsx";
import { useSelector } from "react-redux";

function Home() {
  const {selectedChat}=useSelector(state=>state.userReducer);
  return (
    <div className="home-page">
      <Header></Header>
      {/* <button onClick>learn</button> */}
      <div className="main-content">
       
        <SideBar></SideBar>
       {selectedChat&& <ChatArea></ChatArea>}
        {/* <!--CHAT AREA LAYOUT--> */}
      </div>
    </div>
  );
}

export default Home;
