import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const { Navigate } = useNavigate;
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (userData) {
      setAuthenticated(true);
      setCurrentUser(userData);
    } else {
      setAuthenticated(false);
    }
  }, []);

  useEffect(() => {}, [currentUser]);

  return (
    <div>
      <ToastContainer />
      <Router>
        {authenticated === false ? (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<ProfileLayout />} />
            <Route path="/connections" element={<ConnectionLayout />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
