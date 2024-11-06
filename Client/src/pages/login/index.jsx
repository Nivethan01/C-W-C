import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api_Calls/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

function Login() {
  const dispatch = useDispatch();
  const [User, setUser] = React.useState({
    email: "",
    password: "",
  });
  

  async function onSubmit(e) {
    e.preventDefault();
    try {
      dispatch(showLoader());
      const response = await loginUser(User);
      dispatch(hideLoader());
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.token); // Storing token
        window.location.href = "/"; // Navigate to home page
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      dispatch(hideLoader());
      toast.error(err.message);
    }
  }

  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Login</h1>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={User.email}
              onChange={(e) => setUser({ ...User, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={User.password}
              onChange={(e) => setUser({ ...User, password: e.target.value })}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Don't have an account yet?
            <Link to="/signup" className="link">
              Signup Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
