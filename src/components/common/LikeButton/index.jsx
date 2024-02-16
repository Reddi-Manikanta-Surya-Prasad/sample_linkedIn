import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { Button } from "antd";
import { fetchComments, likeaPost, updatePost } from "../../../utils/user/post";
import "./index.scss";

export default function LikeButton({ posts, currentUser,comments }) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState([]);
  // const [comments, setComments] = useState([]);

  const handleLike = async (posts_id) => {
    const liked = await likeaPost(posts_id);
    if (liked.status === 201) {
      // console.log(liked);
      setLiked(true);
      // const data = {
      //   ...posts,
      //   isLiked: true,
      // };
      // const updatedPost = await updatePost(data);
      // console.log(updatedPost);
    }
  };
  const createComments=async()=>{
    const data={
      content:comment,

    }
    const postComment=await createComments(posts._id,data);
   console.log(postComment);
    if(postComment.status===201){
      setComment(postComment.data.data)
    }
  }

  return (
    <div className="like-container">
      <p>{posts.likeCount} People Like this Post</p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div
          className="likes-comment-inner"
          // onClick={handleLike}
        >
          {posts.isLiked === true ? (
            <BsFillHandThumbsUpFill size={30} color="#0a66c2" />
          ) : (
            <Button
              type=""
              // onClick={handleUpdatePost}
               onClick={() => handleLike(posts._id)}
            >
              <span
                // className={liked ? "blue" : "black"}
                style={{ fontSize: "25px" }}
              >
                <BsHandThumbsUp />
                Like
              </span>
            </Button>
          )}
        </div>
        <div
          className="likes-comment-inner"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          {
            <AiOutlineComment
              size={30}
              color={showCommentBox ? "#0a66c2" : "#212121"}
            />
          }

          <p className={showCommentBox ? "blue" : "black"}>Comments</p>
        </div>
      </div>
      {showCommentBox ? (
        <>
          <input
            onChange={(e)=>setComment(e.target.value)}
            placeholder="Add a Comment"
            className="comment-input"
            name="comment"
             value={comment}
            
          />
          <button
            className="add-comment-btn"
             onClick={createComments}
          >
            Add Comment
          </button>

          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className="all-comments">
                  {/* <p className="name">{comment.}</p> */}
                  <p className="comment">{comment.content}</p>

                  <p className="timestamp">{comment.createdAt}</p>
                  {/* 
                  <p>•</p>
                   */}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
