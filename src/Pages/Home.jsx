import React, { useEffect, useState } from "react";
import { HomeComponent } from "../components/HomeComponent";

import { useNavigate } from "react-router-dom";

import Loader from "../components/common/Loader";

export const Home = (currentUser) => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {}, [currentUser]);
  return loading ? (
    <Loader />
  ) : (
    <HomeComponent currentUser={currentUser.currentUser} />
  );
};
