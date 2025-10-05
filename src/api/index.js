import useSWR from "swr";
import {
  ADMINS,
  APPROVE_REJECT_PRODUCT,
  BRANDS,
  DISPUTES,
  FORGOT_PASSWORD,
  PRODUCTS,
  RESET_PASSWORD,
  SIGNIN,
  VERIFY_FORGOT_PASSWORD,
  VERIFY_LOGIN,
  COLLECTIONS,
  VERIFY_BRAND,
  ACTIVATE_DEACTIVATE_BRAND,
  UPDATE_ADMIN_STATUS,
  UPDATE_ORDER_STATUS,
  CATEGORIES,
  DELETE_SUBCATEGORIES,
  LOGOUT,
  FETCH_CATEGORIES,
  FETCH_COLLECTIONS,
  FETCH_SUBCATEGORIES,
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



// ##AUTH  (Remains the last)
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
export const logout = () => {
  const { data, error, mutate } = useSWR(LOGOUT, fetcher);
  return {
    logout: data,
    logoutLoading: !error && !data,
    logoutError: error,
    mutate,
  };
};






// ##SETTINGS(Remains the last 2)
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
export const updateAdminStatus = async (id) => {
  const result = await mutationRequest(`${UPDATE_ADMIN_STATUS}/${id}`, "patch", false);
  return result;
};
export const deleteAdmin = async (id) => {
  const result = await mutationRequest(`${ADMINS}/${id}`, "delete", false);
  return result;
};



// ##BRANDS (Remains the last 2)
export const fetchBrands = () => {
  const { data, error, mutate } = useSWR(BRANDS, fetcher);
  return {
    brands: data,
    brandsLoading: !error && !data,
    brandsError: error,
    mutate,
  };
};
export const verifyBrand = async (values, brandID) => {
  const result = await mutationRequest(
    `${VERIFY_BRAND}/${brandID}`,
    "post",
    values,
    false
  );
  return result;
};
export const activateDeactivateBrand = async (values, brandID) => {
  const result = await mutationRequest(
    `${ACTIVATE_DEACTIVATE_BRAND}/${brandID}`,
    "post",
    values,
    false
  );
  return result;
};




// ##PRODUCTS (DONE: Pending field availability for fetchProductByBrand)
export const fetchProducts = () => {
  const { data, error, mutate } = useSWR(PRODUCTS, fetcher);
  return {
    products: data,
    productsLoading: !error && !data,
    productsError: error,
    mutate,
  };
};
export const fetchProductByBrand = (brandID) => {
  const { data, error, mutate } = useSWR(`${PRODUCTS}/${brandID}`, fetcher);
  return {
    brandProduct: data,
    brandProductLoading: !error && !data,
    brandProductError: error,
    mutate,
  };
};
export const approveRejectProduct = async (values, id) => {
  const result = await mutationRequest(
    `${APPROVE_REJECT_PRODUCT}/${id}`,
    "patch",
    values,
    false
  );
  return result;
};



// ##SETTINGS (DONE: The deleteCollection endpoint is not working. Sending request bit not showing on the data array. Backend issue)
export const addCategory = async (values) => {
  const result = await mutationRequest(CATEGORIES, "post", values, false, "text/csv");
  return result;
};
export const bulkUploadCategory = async (values) => {
  const result = await mutationRequest(CATEGORIES, "post", values, false, "text/csv");
  return result;
};
export const addSubcategory = async ({name, categoryId}) => {
  const result = await mutationRequest(
    `admins/${categoryId}/subcategories`,
    "post",
    { name },
    false
  );
  return result;
};
export const addCollection = async (values) => {
  const result = await mutationRequest(COLLECTIONS, "post", values, false);
  return result;
};
export const deleteSubcategory = async (id) => {
  const result = await mutationRequest(`${DELETE_SUBCATEGORIES}/${id}`, "delete", false);
  return result;
};
export const deleteCollection = async (id) => {
  const result = await mutationRequest(`${COLLECTIONS}/${id}`, "delete", false);
  return result;
};
//Endpoints not under "/admin" but needed anyway
export const fetchCategory = () => {
  const { data, error, mutate } = useSWR(FETCH_CATEGORIES, fetcher);
  return {
    category: data,
    categoryLoading: !error && !data,
    categoryError: error,
    mutate,
  };
};
export const fetchSubcategory = () => {
  const { data, error, mutate } = useSWR(FETCH_SUBCATEGORIES, fetcher);
  return {
    subcategory: data,
    subcategoryLoading: !error && !data,
    subcategoryError: error,
    mutate,
  };
};
export const fetchCollection = () => {
  const { data, error, mutate } = useSWR(FETCH_COLLECTIONS, fetcher);
  return {
    collection: data,
    collectionLoading: !error && !data,
    collectionError: error,
    mutate,
  };
};




// ##DISPUTES(DONE: Pending field availability for both payout and order disputes)
export const fetchDisputes = (type) => {
  const { data, error, mutate } = useSWR(`${DISPUTES}?disputeRequestType=${type}`, fetcher);
  return {
    disputes: data,
    disputesLoading: !error && !data,
    disputesError: error,
    mutate,
  };
};




// ##ORDERS(Unable to do without knowing fields to patch)
export const updateOrderStatus = async (id) => {
  const result = await mutationRequest(`${UPDATE_ORDER_STATUS}/${id}`, "patch", false);
  return result;
};

