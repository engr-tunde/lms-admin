import { axiosInstance } from "./client";
import Cookies from "js-cookie";

export const fetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status === 401) {
        Cookies.remove("user-token-key");
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      if (!window.navigator.onLine || err.message === "Network Error") {
        throw new Error("No Internet connection. Please check your network.");
      }
      if (err?.response?.status == 401) {
        Cookies.remove("user-token-key");
        window.location.href = "/login";
      }
      throw Error(err);
    });

export const sessionFetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        Cookies.remove("user-token-key");
        return null;
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        Cookies.remove("user-token-key");
        return null;
      }
      throw Error(err);
    });
