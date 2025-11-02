import { axiosInstance } from "./client";
import Cookies from "js-cookie";

export const fetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      if (!window.navigator.onLine || err.message === "Network Error") {
      throw new Error("No Internet connection. Please check your network.");
      }
      if (err?.response?.status == 401) {
        Cookies.remove("authToken");
        window.location.href = "/login";
      }
      throw Error(err);
    });

export const sessionFetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        // return true;
        return res.data;
      } else if (res.status === 401) {
        Cookies.remove("authToken");
        return false;
      }
    })
    .catch((err) => {
      // console.log("err err", err);
      // if (err.response.status == 401) {
      //   Cookies.remove("authToken");
      //   // return false;
      // }
      throw Error(err);
    });
