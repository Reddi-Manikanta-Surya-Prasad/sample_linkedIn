import { ReusableAxios } from "../../../components/CustomHook/ReusableAxios";

export const getUsers = async (body) => {
  const url = "https://academics.newtonschool.co/api/v1/user/login";

  const headers = {
    "Content-Type": "application/json",
    projectID: "i1dieevrt9g1",
  };
  try {
    const getUsers = await ReusableAxios(url, "post", headers, body);
    return getUsers;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const registerAPI = async (body) => {
  const url = "https://academics.newtonschool.co/api/v1/user/signup";

  const headers = {
    "Content-Type": "application/json",
    projectID: "i1dieevrt9g1",
  };
  try {
    const registerAPI = await ReusableAxios(url, "post", headers, body);
    return registerAPI;
  } catch (error) {
    console.log(error);
    return error;
  }
};
