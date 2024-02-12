import { ReusableAxios } from "../../components/CustomHook/ReusableAxios";

const token = localStorage.getItem("userData");
var tokenn = JSON.parse(token);

export const createPost = async (body) => {
  const url = "https://academics.newtonschool.co/api/v1/linkedin/post/";

  const headers = {
    Authorization: `Bearer ${tokenn["token"]}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const createPost = await ReusableAxios(url, "post", headers, body);
    return createPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updatePost = async (body) => {
  const url = "https://academics.newtonschool.co/api/v1/linkedin/post/:postId";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const updatePost = await ReusableAxios(url, "patch", headers, body);
    return updatePost;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deletePost = async () => {
  const url = "https://academics.newtonschool.co/api/v1/linkedin/post/:postId";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const deletePost = await ReusableAxios(url, "delete", headers);
    return deletePost;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const fetchPost = async () => {
  const url =
    "https://academics.newtonschool.co/api/v1/linkedin/post?limit=100";

  const headers = {
    projectID: "i1dieevrt9g1",
  };
  try {
    const fetchPost = await ReusableAxios(url, "get", headers);
    return fetchPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const likeaPost = async () => {
  const url = "https://academics.newtonschool.co/api/v1/linkedin/like/:postId";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const likeaPost = await ReusableAxios(url, "post", headers);
    return likeaPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const fetchComments = async () => {
  const url =
    "https://academics.newtonschool.co/api/v1/linkedin/post/:postId/comments";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const fetchComments = await ReusableAxios(url, "get", headers);
    return fetchComments;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const createComments = async () => {
  const url =
    "https://academics.newtonschool.co/api/v1/linkedin/comment/:postId";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const createComments = await ReusableAxios(url, "post", headers);
    return createComments;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteComments = async () => {
  const url =
    "https://academics.newtonschool.co/api/v1/linkedin/comment/:commentId";

  const headers = {
    Authorisation: `Bearer ${token}`,
    projectID: "i1dieevrt9g1",
  };
  try {
    const deleteComments = await ReusableAxios(url, "delete", headers);
    return deleteComments;
  } catch (error) {
    console.log(error);
    return error;
  }
};
