import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Learn from "./pages/Learn/learn";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/protectedRoute";
function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
