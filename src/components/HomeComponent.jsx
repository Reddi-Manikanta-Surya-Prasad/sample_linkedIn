import React, { useEffect } from "react";
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate";

export const HomeComponent = ({ currentUser }) => {
  useEffect(() => {}, [currentUser]);
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser} />
    </div>
  );
};
