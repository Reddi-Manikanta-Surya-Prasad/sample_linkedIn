import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (Object.keys(userData).length > 0) {
      setAuthenticated(true); // Set authenticated to true if userData exists
      setCurrentUser(userData);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Allow access to home, register, profile, and connections regardless of authentication */}
          <Route path="/" element={<HomeLayout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileLayout />} />
          <Route path="/connections" element={<ConnectionLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
