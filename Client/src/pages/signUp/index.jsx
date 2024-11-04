import React from "react";
import { Link } from "react-router-dom";
import { signUpUser } from "./../../api_Calls/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
function SignUp() {
  const dispatch=useDispatch();
  const [User, setUser] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  async function onformSubmit(e) {
    e.preventDefault();
    try {
      dispatch(showLoader())
      const response = await signUpUser(User);
      dispatch(hideLoader())
      if (response.success) {
        toast.success(response.message);
        window.location.href = "/";
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      dispatch(hideLoader())
      toast.error(err.message);
    }
  }
  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
        </div>
        <div className="form">
          <form onSubmit={onformSubmit}>
            <div className="column">
              <input
                type="text"
                placeholder="First Name"
                value={User.firstname}
                onChange={(e) =>
                  setUser({ ...User, firstname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={User.lastname}
                onChange={(e) => setUser({ ...User, lastname: e.target.value })}
              />
            </div>
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
            <button>Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Already have an account?
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
