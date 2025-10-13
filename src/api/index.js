import useSWR from "swr";
import {
  APPROVE_REJECT_PRODUCT,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SIGNIN,
  VERIFY_FORGOT_PASSWORD,
  VERIFY_LOGIN,
  VERIFY_BRAND,
  ACTIVATE_DEACTIVATE_BRAND,
  UPDATE_ADMIN_STATUS,
  UPDATE_ORDER_STATUS,
  DELETE_SUBCATEGORIES,
  LOGOUT,
  FETCH_DISPUTES,
  CREATE_DISPUTES,
  DISPUTE_VIEW,
  FETCH_CATEGORIES,
  FETCH_COLLECTIONS,
  FETCH_SUBCATEGORIES,
  FETCH_ORDERS,
  FETCH_BRANDTYPES,
  CREATE_UPDATE_DELETE_COLLECTIONS,
  CREATE_UPDATE_DELETE_CATEGORIES,
  CREATE_UPDATE_DELETE_BRANDTYPES,
  FETCH_BRANDS,
  FETCH_BRAND_PRODUCTS,
  FETCH_BRAND_ORDERS,
  FETCH_BRAND_DISPUTES,
  FETCH_BRAND_FINANCES,
  FETCH_PRODUCTS,
  CREATE_FETCH_ADMINS,
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




// ##SETTINGS(Done: New endpoints. Everything needs to be tested)
export const addAdmin = async (values) => {
  const result = await mutationRequest(CREATE_FETCH_ADMINS, "post", values, false);
  return result;
};
export const fetchAdmins = () => {
  const { data, error, mutate } = useSWR(CREATE_FETCH_ADMINS, fetcher);
  return {
    admins: data,
    adminsLoading: !error && !data,
    adminsError: error,
    mutate,
  };
};
export const updateAdminStatus = async (id, payload) => {
  const result = await mutationRequest(`${UPDATE_ADMIN_STATUS}/${id}`, "patch", payload, false);
  return result;
};
// export const deleteAdmin = async (id) => {
//   console.log("Deleting admin:", `${ADMINS}/${id}`);
//   const result = await mutationRequest(`${ADMINS}/${id}`, "delete", false);
//   return result;
// };



// ##BRANDS (Remains the last 2)
export const fetchAllBrands = () => {
  const { data, error, mutate } = useSWR(FETCH_BRANDS, fetcher);
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
export const fetchBrand = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_BRANDS}/${id}`, fetcher);
  return {
    brand: data,
    brandLoading: !error && !data,
    brandError: error,
    mutate,
  };
}
export const fetchBrandProduct = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_BRAND_PRODUCTS}/${id}`, fetcher);
  return {
    brandProduct: data,
    brandProductLoading: !error && !data,
    brandProductError: error,
    mutate,
  };
};
export const fetchBrandOrder = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_BRAND_ORDERS}/${id}`, fetcher);
  return {
    brandOrder: data,
    brandOrderLoading: !error && !data,
    brandOrderError: error,
    mutate,
  };
};
export const fetchBrandDispute = () => {
  const { data, error, mutate } = useSWR(`${FETCH_BRAND_DISPUTES}/${id}`, fetcher);
  return {
    brandDispute: data,
    brandDisputeLoading: !error && !data,
    brandDisputeError: error,
    mutate,
  };
};
export const fetchBrandFinance = () => {
  const { data, error, mutate } = useSWR(`${FETCH_BRAND_FINANCES}/${id}`, fetcher);
  return {
    brandFinance: data,
    brandFinanceLoading: !error && !data,
    brandFinanceError: error,
    mutate,
  };
};



// ##PRODUCTS (DONE: Pending field availability for fetchProductByBrand)
export const fetchProducts = () => {
  const { data, error, mutate } = useSWR(FETCH_PRODUCTS, fetcher);
  return {
    products: data,
    productsLoading: !error && !data,
    productsError: error,
    mutate,
  };
};
export const fetchProductByBrand = (brandID) => {
  const { data, error, mutate } = useSWR(`${FETCH_PRODUCTS}/${brandID}`, fetcher);
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



// ##SETTINGS (DONE: The deleteCollection endpoint is not working. Sending request but not showing on the data array. Backend issue)
//Also, no BrandType endpoint is in the documentation. CATEGORIES endpoint only accept csvs. while addSubcategory only accept plains
export const fetchBrandType = () => {
  const { data, error, mutate } = useSWR(FETCH_BRANDTYPES, fetcher);
  return {
    brandtype: data, 
    brandtypeLoading: !error && !data, 
    brandtypeError: error, 
    mutate,
  }
};
export const addBrandType = async (values) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_BRANDTYPES}`, "post", values, false);
  return result;
};
export const updateBrandType = async (values, id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_BRANDTYPES}/${id}`, "patch", values, false);
  return result;
};
export const deleteBrandType = async (id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_BRANDTYPES}/${id}`, "delete", false);
  return result;
};

export const fetchCategory = () => {
  const { data, error, mutate } = useSWR(FETCH_CATEGORIES, fetcher);
  return {
    category: data,
    categoryLoading: !error && !data,
    categoryError: error,
    mutate,
  };
};
export const addCategory = async (values) => {
  const result = await mutationRequest(CREATE_UPDATE_DELETE_CATEGORIES, "post", values, false, "text/csv");
  return result;
};
export const bulkUploadCategory = async (values) => {
  const result = await mutationRequest(CREATE_UPDATE_DELETE_CATEGORIES, "post", values, false, "text/csv");
  return result;
};
export const updateCategory = async (values, id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_CATEGORIES}/${id}`, "patch", values, false);
  return result;
};
export const deleteCategory = async (id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_CATEGORIES}/${id}`, "delete", false);
  return result;
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
export const addSubcategory = async ({name, categoryId}) => {
  const result = await mutationRequest(
    `admins/${categoryId}/subcategories`,
    "post",
    { name },
    false
  );
  return result;
};
export const deleteSubcategory = async (id) => {
  const result = await mutationRequest(`${DELETE_SUBCATEGORIES}/${id}`, "delete", false);
  return result;
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
export const addCollection = async (values) => {
  const result = await mutationRequest(CREATE_UPDATE_DELETE_COLLECTIONS, "post", values, false);
  return result;
};
export const updateCollection = async (values, id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_COLLECTIONS}/${id}`, "patch", values, false);
  return result;
};
export const deleteCollection = async (id) => {
  const result = await mutationRequest(`${CREATE_UPDATE_DELETE_COLLECTIONS}/${id}`, "delete", false);
  return result;
};


// ##DISPUTES(DONE: Pending field availability for both payout and order disputes)
export const fetchAllDisputes = (type) => {
  const { data, error, mutate } = useSWR(`${FETCH_DISPUTES}?disputeRequestType=${type}`, fetcher);
  return {
    disputes: data,
    disputesLoading: !error && !data,
    disputesError: error,
    mutate,
  };
};
export const fetchDisputeView = (id) => {
  const { data, error, mutate } = useSWR(`${DISPUTE_VIEW}/${id}`, fetcher);
  return {
    disputeView: data,
    disputeViewLoading: !error && !data,
    disputeViewError: error,
    mutate,
  };
};


// ##ORDERS
export const updateOrderStatus = async (id) => {
  const result = await mutationRequest(`${UPDATE_ORDER_STATUS}/${id}`, "patch", false);
  return result;
};
export const fetchOrders = () => {
  const { data, error, mutate } = useSWR(FETCH_ORDERS, fetcher);
  return {
    orders: data,
    ordersLoading: !error && !data,
    ordersError: error,
    mutate,
  };
};



