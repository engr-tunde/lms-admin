import useSWR from "swr";
import {
  ADMINS,
  BRANDS,
  DISPUTES,
  FORGOT_PASSWORD,
  PRODUCTS,
  RESET_PASSWORD,
  SIGNIN,
  VERIFY_FORGOT_PASSWORD,
  VERIFY_LOGIN,
} from "../constants/routes";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";

// WEBSITE
// Tokens

// Auth
// export const checkSession = () => {
//   const { data, error, mutate } = useSWR(USER_PROFILE, sessionFetcher);
//   return {
//     session: data,
//     sessionLoading: !error && !data,
//     sessionError: error,
//     mutate,
//   };
// };

export const forgotPassword = async (values) => {
  const result = await mutationRequest(FORGOT_PASSWORD, "post", values, false);
  return result;
};
export const verifyForgotPassword = async (values) => {
  const result = await mutationRequest(
    VERIFY_FORGOT_PASSWORD,
    "post",
    values,
    false
  );
  return result;
};
export const resetPassword = async (values) => {
  const result = await mutationRequest(RESET_PASSWORD, "patch", values, false);
  return result;
};
export const login = async (values) => {
  const result = await mutationRequest(SIGNIN, "post", values, false);
  return result;
};
export const verifyLogin = async (values) => {
  const result = await mutationRequest(VERIFY_LOGIN, "post", values, false);
  return result;
};

// Admins
export const addAdmin = async (values) => {
  const result = await mutationRequest(ADMINS, "post", values, false);
  return result;
};
export const fetchAdmins = () => {
  const { data, error, mutate } = useSWR(ADMINS, fetcher);
  return {
    admins: data,
    adminsLoading: !error && !data,
    adminsError: error,
    mutate,
  };
};
export const deleteAdmin = async (id) => {
  const result = await mutationRequest(`${ADMINS}/${id}`, "delete", false);
  return result;
};

export const fetchBrands = () => {
  const { data, error, mutate } = useSWR(BRANDS, fetcher);
  return {
    brands: data,
    brandsLoading: !error && !data,
    brandsError: error,
    mutate,
  };
};
export const fetchProducts = () => {
  const { data, error, mutate } = useSWR(PRODUCTS, fetcher);
  return {
    products: data,
    productsLoading: !error && !data,
    productsError: error,
    mutate,
  };
};
export const fetchSingleProduct = (id) => {
  const { data, error, mutate } = useSWR(`${PRODUCTS}/${id}`, fetcher);
  return {
    product: data,
    productLoading: !error && !data,
    productError: error,
    mutate,
  };
};
export const fetchDisputes = (id) => {
  const { data, error, mutate } = useSWR(`${DISPUTES}/${id}`, fetcher);
  return {
    disputes: data,
    disputesLoading: !error && !data,
    disputesError: error,
    mutate,
  };
};
