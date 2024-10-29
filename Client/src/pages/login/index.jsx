import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api_Calls/auth";

function Login() {
  const [User, setUser] = React.useState({
    email: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await loginUser(User); // Corrected "responce" to "response"
      if (response.status) {
        alert(response.message);
        localStorage.setItem("token", response.token); // Storing token in local storage
        window.location.href = "/"; // Redirecting to home page
      } else { 
        alert(response.message);
      }
    } catch (err) {
      alert(err.message); // Displaying error message
    }
  }

  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Login Here</h1>
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
            <Link to="/signup">Signup Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
