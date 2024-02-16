import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";

import { useNavigate } from "react-router-dom";

import Loader from "../components/common/Loader";

export default function Login() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (res) => {
  //     if (res?.accessToken) {
  //       navigate("/");
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);
  return loading ? <Loader /> : <LoginComponent />;
}
