import { ReusableAxios } from "../../components/CustomHook/ReusableAxios";

export const searchItem = async (item) => {
  const url = `https://academics.newtonschool.co/api/v1/linkedin/post?search=`;

  const headers = {
    projectID: "i1dieevrt9g1",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    const fetchPost = await ReusableAxios(url, "get", headers, item);
    return fetchPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchFilter = async (item) => {
  const url = `https://academics.newtonschool.co/api/v1/linkedin/post?filter=${item}`;

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
