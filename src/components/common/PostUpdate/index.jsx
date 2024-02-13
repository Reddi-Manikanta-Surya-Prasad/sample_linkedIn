import React, { useState, useMemo, useEffect } from "react";
// import { postStatus, getStatus, updatePost } from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import ModalComponent from "../Modal";
import { uploadPostImage } from "../../../api/ImageUpload";
import { getUniqueID } from "../../../helpers/getUniqueId";
import PostsCard from "../PostsCard";
import "./index.scss";
import { fetchPost } from "../../../utils/user/post";

export default function PostStatus({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");

  useEffect(() => {
    fetchingPosts();
  }, []);

  useEffect(() => {}, [currentUser]);

  const fetchingPosts = async () => {
    const posts = await fetchPost();
    if (posts.status === 200) {
      setAllPosts(posts.data.data);
    }
  };

  return (
    <div className="post-status-main">
      <div className="user-details">
        <img
          src={
            currentUser?.data?.profileImage
              ? currentUser?.data?.profileImage
              : null
          }
          alt="imageLink"
        />
        <p className="name">
          {currentUser?.data?.name ? currentUser?.data?.name : "Default User"}
        </p>
        {/* <p className="headline">{currentUser?.data.headline}</p> */}
      </div>
      <div className="post-status">
        {/* <img
          className="post-image"
          src={currentUser?.imageLink}
          alt="imageLink"
        /> */}
        <button
          className="open-post-modal"
          onClick={() => {
            setModalOpen(true);
            setIsEdit(false);
          }}
        >
          Start a Post
        </button>
      </div>

      {modalOpen ? (
        <ModalComponent
          // setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          fetchingPosts={fetchingPosts}
          // status={status}
          // sendStatus={sendStatus}
          // isEdit={isEdit}
          // updateStatus={updateStatus}
          // uploadPostImage={uploadPostImage}
          // postImage={postImage}
          // setPostImage={setPostImage}
          // setCurrentPost={setCurrentPost}
          // currentPost={currentPost}
        />
      ) : null}

      <div>
        {allPosts.map((posts) => {
          return (
            <div key={posts._id}>
              <PostsCard
                posts={posts}
                currentUser={currentUser}
                // getEditData={getEditData}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
