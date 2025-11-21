import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL_BASE?.toString(),
    headers: {
      "u-x-key": String(Cookies.get("user-token-key")),
    },
  });
