import { axiosInstance } from "./client";
import Cookies from "js-cookie";

const postData = async (url, data, withCredentials, contentType = "application/json") => {
  const result = await axiosInstance()
    .post(url, data, { 
      withCredentials,
      headers: {
        'Content-Type': contentType
      }
    })
    .then((res) => {
      if (res.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      return res;
    })

    .catch((err) => { 
      // console.log(err.response.data); 
      return err.response; 
    });

  return result;
};

const putData = async (url, data, withCredentials) => {
  const result = await axiosInstance()
    .put(url, data, { withCredentials })
    .then((res) => {
      // console.log("res status", res.status);
      if (res.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      return res;
    })
    .catch((err) => err.response);

  return result;
};

const patchData = async (url, data, withCredentials) => {
  const result = await axiosInstance()
    .patch(url, data, { withCredentials })
    .then((res) => {
      if (res.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      return res;
    })
    .catch((err) => err.response);

  return result;
};

const deleteData = async (url, withCredentials) => {
  const result = await axiosInstance()
    .delete(url, { withCredentials })
    .then((res) => {
      // console.log("res status", res.status);
      if (res.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      return res;
    })
    .catch((err) => err.response);

  return result;
};

const postMultipartData = async (url, data, withCredentials) => {
  const result = await axiosInstance()
    .patch(url, data, { withCredentials })
    .then((res) => res.data)
    .catch((err) => err.response);
  return result;
};

export const mutationRequest = (
  url,
  type = "post",
  data,
  withCredentials = false, 
  contentType = "application/json"
) => {
  switch (type.toLowerCase()) {
    case "post":
      return postData(url, data, withCredentials, contentType);

    case "put":
      return putData(url, data, withCredentials);

    case "patch":
      return patchData(url, data, withCredentials);

    case "delete":
      return deleteData(url, withCredentials);

    case "data":
      return postMultipartData(url, data, withCredentials);

    default:
      return postData(url, data, withCredentials, contentType);
  }
};
