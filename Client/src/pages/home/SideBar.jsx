import { useState } from "react";
import Search from "./Search";
import UserList from "./UserList";

function SideBar() {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div className="app-sidebar">
      <Search 
      searchKey={searchKey} 
      setSearchKey={setSearchKey}>
      </Search>
      
    <UserList searchKey={searchKey}></UserList>
    </div>
  );
}

export default SideBar;
