import { useDispatch, useSelector } from "react-redux";
function Header() {
  const { user } = useSelector((state) => state.userReducer);
  
  // console.log(user);
  
  function getFullName() {
    
      let fname=user?.firstname.at(0).toUpperCase()+user?.firstname.slice(1).toLowerCase();
      let lname=user?.lastname.at(0).toUpperCase()+user?.lastname.slice(1).toLowerCase();
      return fname+' '+lname
  
  }
  function getInitial() {
    let fchar = user?.firstname.toUpperCase()[0];
    let lchar = user?.lastname.toUpperCase()[0];
    return fchar + lchar
  }
  return (
    <div className="app-header">
      <div className="app-logo">
        <i className="fa fa-comments" aria-hidden="true"></i>
        Chatly
      </div>
      <div className="app-user-profile">
        <div className="logged-user-name">{getFullName()}</div>
        <div className="logged-user-profile-pic">{getInitial()}</div>
      </div>
    </div>
  );
}
export default Header;
