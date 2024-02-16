import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import LikeButton from "../LikeButton";
import Carousel from "../Carousel";
import { timeStampConversionToDateAndTime } from "../../../helpers/timeStampConversion";
import "./index.scss";
import { fetchComments } from "../../../utils/user/post";

export default function PostsCard({ posts, currentUser }) {
  let navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    handleFetchPostComments();
  }, []);

  const handleFetchPostComments = () => {
    if (posts.commentCount > 0) {
      setTimeout(async () => {
        const comments = await fetchComments(posts._id);
        if (comments.status === 200) {
          setComments(comments.data.data);
        }
      }, 500);
    }
  };

  return (
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
          <p>{posts.content}</p>
          <div>
            {posts.images !== null && posts.images.length > 0 ? (
              <Carousel data={posts.images} />
            ) : null}
          </div>
        </div>
      </div>

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
        posts={posts}
        handleFetchPostComments={handleFetchPostComments}
        comments={comments}
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
