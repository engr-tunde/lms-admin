import useSWR from "swr";
import {
  FETCH_PRODUCTS,
  FORGOT_PASSWORD,
  RESEND_VERIFY_ACCOUNT_OTP,
  RESET_PASSWORD,
  SIGNIN,
  USER_LOGOUT,
  USER_PROFILE,
  VERIFY_ACCOUNT,
} from "../constants/routes";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";

// WEBSITE
// Tokens
export const fetchProducts = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_PRODUCTS, withCredentials: true },
    fetcher
  );
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};

// Auth
export const checkSession = () => {
  const { data, error, mutate } = useSWR(USER_PROFILE, sessionFetcher);
  return {
    session: data,
    sessionLoading: !error && !data,
    sessionError: error,
    mutate,
  };
};
export const userVerifyEmail = async (values) => {
  const result = await mutationRequest(VERIFY_ACCOUNT, "post", values, true);
  return result;
};
export const userResendVerifyEmailOTP = async (values) => {
  const result = await mutationRequest(
    RESEND_VERIFY_ACCOUNT_OTP,
    "post",
    values,
    true
  );
  return result;
};

export const userLogin = async (values) => {
  const result = await mutationRequest(SIGNIN, "post", values, false);
  return result;
};
export const userForgotPassword = async (values) => {
  const result = await mutationRequest(FORGOT_PASSWORD, "post", values, false);
  return result;
};
export const userResetPassword = async (id, token, values) => {
  const result = await mutationRequest(
    `${RESET_PASSWORD}?id=${id}&token=${token}`,
    "post",
    values,
    false
  );
  return result;
};

// Profile
export const userProfile = () => {
  const { data, error, mutate } = useSWR(
    { url: USER_PROFILE, withCredentials: true },
    fetcher
  );
  return {
    user: data,
    userLoading: !error && !data,
    userError: error,
    mutate,
  };
};
//
export const userLogout = async () => {
  const result = await mutationRequest(USER_LOGOUT, "post", null, true);
  console.log("result", result);
  return result;
};
