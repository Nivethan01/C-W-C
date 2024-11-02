import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getloggedInUser } from "./../api_Calls/users";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    try {
      const response = await getloggedInUser();
      if (response.success) {
        setUser(response.data);
      } else {
        alert("Error");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUser();
    } else {
      navigate("/login");
    }
  }, [navigate]); // Ensures useEffect only runs once

  if (loading) {
    return <div className="spinner">Loading...</div>; // Add CSS for the spinner class
  }

  return (
    <div>
      {user && (
        <>
          <p>Name: {user.firstname + " " + user.lastname}</p>
          <p>Email: {user.email}</p>
          <br />
        </>
      )}
      {children}
    </div>
  );
}

export default ProtectedRoute;
