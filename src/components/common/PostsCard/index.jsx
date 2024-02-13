import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import LikeButton from "../LikeButton";
import "./index.scss";
import { timeStampConversionToDateAndTime } from "../../../helpers/timeStampConversion";

export default function PostsCard({
  posts,
  id,
  currentUser,
  // , getEditData
}) {
  let navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  // const [isConnected, setIsConnected] = useState(false);
  // useMemo(() => {
  //   getCurrentUser(setCurrentUser);
  //   getAllUsers(setAllUsers);
  // }, []);

  useEffect(() => {
    console.log(posts);
    return;
  }, []);
  console.log(posts, currentUser);

  return (
    // currentUser?.data?._id === posts?.author?._id ?
    <div className="posts-card" key={posts._id}>
      <div className="post-image-wrapper">
        {currentUser?.data?._id === posts?.author?._id ? (
          <div className="action-container">
            <BsPencil
              size={20}
              className="action-icon"
              // onClick={() => getEditData(posts)}
            />
            <BsTrash
              size={20}
              className="action-icon"
              // onClick={() => deletePost(posts.id)}
            />
          </div>
        ) : (
          <></>
        )}

        <img
          alt="profile-image"
          className="profile-image"
          src={posts?.author?.profileImage}
        />
        <div>
          <p
            className="name"
            // onClick={() =>
            //   navigate("/profile", {
            //     state: { id: posts?.userID, email: posts.userEmail },
            //   })
            // }
          >
            {posts?.author?.name}
          </p>
          <p className="headline">
            Writer | Developer
            {/* {allUsers.filter((user) => user.id === posts.userID)[0]?.headline} */}
          </p>
          <p className="timestamp">
            {timeStampConversionToDateAndTime(posts.createdAt)}
          </p>
        </div>
      </div>
      <p>{posts.content}</p>
      {/* {posts.images.map((item) => {
        console.log(item)
            return (
              <img
                onClick={() => setImageModal(true)}
                src={posts.images}
                className="post-image"
                alt="post-image"
              />
            );
          })()} */}
      {/* <p
        className="status"
        dangerouslySetInnerHTML={{ __html: posts.status }}
      ></p> */}

      <LikeButton
        userId={currentUser?.data?._id}
        postId={posts._id}
        currentUser={currentUser}
      />

      <Modal
        centered
        open={imageModal}
        onOk={() => setImageModal(false)}
        onCancel={() => setImageModal(false)}
        footer={[]}
      >
        <img
          onClick={() => setImageModal(true)}
          src={posts?.postImage}
          className="post-image modal"
          alt="post-image"
        />
      </Modal>
    </div>
  );
  // : (
  //   <></>
  // );
}
