import useSWR from "swr";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";
import { 
  SIGNIN, 
  CHECK_SESSION, 
  SIGNOUT, 
  ADD_COURSE_CATEGORY, 
  UPDATE_COURSE_CATEGORY, 
  DELETE_COURSE_CATEGORY, 
  FETCH_COURSE_CATEGORIES, 
  ADD_COURSE_OVERVIEW, 
  ADD_COURSE_MATERIAL_TITLE, 
  ADD_COURSE_REQUIREMENTS, 
  ADD_COURSE_PRICING, 
  FETCH_COURSES, 
  FETCH_COURSE,
  FETCH_COURSE_MATERIAL, 
  DELETE_COURSE_MATERIAL, 
  DELETE_COURSE, 
  FETCH_ORDERS, 
  FETCH_SINGLE_ORDER, 
  FETCH_PAYMENTS, 
  FETCH_ORDER_PAYMENT, 
  FETCH_USERS, 
  FETCH_SINGLE_USER, 
  DELETE_USER, 
  BLOCK_USER, 
  UNBLOCK_USER, 
  ADD_ADMIN, 
  UPDATE_ADMIN, 
  FETCH_ADMINS, 
  FETCH_SINGLE_ADMIN, 
  DELETE_ADMIN,
  UPDATE_COURSE_OVERVIEW,
  UPDATE_COURSE_REQUIREMENTS,
  PUBLISH_COURSE,
  ADD_COURSE_MATERIAL_FILES, 

} from "../constants/routes";


// Auth
export const checkSession = () => {
  const { data, error, mutate } = useSWR(CHECK_SESSION, sessionFetcher);
  return {
    session: data,
    sessionLoading: !error && !data,
    sessionError: error,
    mutate,
  };
};

export const login = async (values) => {
  const result = await mutationRequest(SIGNIN, "post", values, false);
  return result;
};

export const logout = async () => {
  const result = await mutationRequest(SIGNOUT, "post", null, false);
  return result;
};


// ADMIN 

export const addAdmin = async (values) => {
  const result = await mutationRequest(ADD_ADMIN, "post", values, false)
  return result;
}

export const updateAdmin = async (values, id) => {
  const result = await mutationRequest(`${UPDATE_ADMIN}/${id}`, "put", values, false)
  return result;
}
export const fetchAllAdmins = () => {
  const { data, error, mutate } = useSWR(FETCH_ADMINS, fetcher);
  return {  
    admins: data,
    adminsLoading: !error && !data,
    adminsError: error,
    mutate,
  }
}
export const fetchAdmin = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_SINGLE_ADMIN}/${id}`, fetcher);
  return {  
    admin: data,
    adminLoading: !error && !data,
    adminError: error,
    mutate,
  }
}

export const deleteAdmin = async (id) => {
  const result = await mutationRequest(`${DELETE_ADMIN}/${id}`, "delete", false)
  return result;
}



// CREATE COURSE 

// ----- course category
export const fetchCategories = () => {
  const { data, error, mutate } = useSWR(FETCH_COURSE_CATEGORIES, fetcher);
  return {  
    categories: data,
    categoriesLoading: !error && !data,
    categoriesError: error,
    mutate,
  }
}

export const addCategory = async (values) => {
  const result = await mutationRequest(ADD_COURSE_CATEGORY, "post", values, false)
  return result;
}

export const updateCategory = async (values, id) => {
  const result = await mutationRequest(`${UPDATE_COURSE_CATEGORY}/${id}`, "put", values, false)
  return result;
}
export const deleteCategory = async (id) => {
  const result = await mutationRequest(`${DELETE_COURSE_CATEGORY}/${id}`, "delete", false)
  return result;
}






export const addOverview = async (values) => {
  const result = await mutationRequest(ADD_COURSE_OVERVIEW, "post", values, false)
  return result;
}
export const updateOverview = async (values, id) => {
  const result = await mutationRequest(`${UPDATE_COURSE_OVERVIEW}/${id}`, "put", values, false)
  return result;
}
export const addMaterialTitle = async (values, id) => {
  const result = await mutationRequest(`${ADD_COURSE_MATERIAL_TITLE}/${id}`, "post", values, false)
  return result;
}
export const addMaterialFile = async (values, sectionId) => {
  const result = await mutationRequest(`${ADD_COURSE_MATERIAL_FILES}/${sectionId}`, "post", values, false)
  return result;
}
export const addRequirements = async (values, id) => {
  const result = await mutationRequest(`${ADD_COURSE_REQUIREMENTS}/${id}`, "post", values, false)
  return result;
}

export const updateRequirements = async (values, id) => {
  const result = await mutationRequest(`${UPDATE_COURSE_REQUIREMENTS}/${id}`, "put", values, false)
  return result;
}

export const addPricing = async (values, id) => {
  const result = await mutationRequest(`${ADD_COURSE_PRICING}/${id}`, "post", values, false)
  return result;
}
export const publishCourse = async (values, id) => {
  const result = await mutationRequest(`${PUBLISH_COURSE}/${id}`, "post", values, false)
  return result;
}

export const fetchAllCourses = () => {
  const { data, error, mutate } = useSWR(FETCH_COURSES, fetcher);
  return {  
    courses: data,
    coursesLoading: !error && !data,
    coursesError: error,
    mutate,
  }
}
export const fetchCourse = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_COURSE}/${id}`, fetcher);
  return {  
    course: data,
    courseLoading: !error && !data,
    courseError: error,
    mutate,
  }
}
export const fetchCourseMaterial = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_COURSE_MATERIAL}/${id}`, fetcher);
  return {  
    courseMaterial: data,
    courseMaterialLoading: !error && !data,
    courseMaterialError: error,
    mutate,
  }
}

export const deleteMaterial = async (id) => {
  const result = await mutationRequest(`${DELETE_COURSE_MATERIAL}/${id}`, "delete", false)
  return result;
}


export const deleteCourse = async (id) => {
  const result = await mutationRequest(`${DELETE_COURSE}/${id}`, "delete", false)
  return result;
}




/// ORDERS AND PAYMENTS 

export const fetchAllOrders = () => {
  const { data, error, mutate } = useSWR(FETCH_ORDERS, fetcher);
  return {  
    orders: data,
    ordersLoading: !error && !data,
    ordersError: error,
    mutate,
  }
}

export const fetchOrder = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_SINGLE_ORDER}/${id}`, fetcher);
  return {  
    order: data,
    orderLoading: !error && !data,
    orderError: error,
    mutate,
  }
}

export const fetchOrderPayment = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_ORDER_PAYMENT}/${id}`, fetcher);
  return {  
    orderPayment: data,
    orderPaymentLoading: !error && !data,
    orderPaymentError: error,
    mutate,
  }
}

export const fetchAllPayments = () => {
  const { data, error, mutate } = useSWR(FETCH_PAYMENTS, fetcher);
  return {  
    payments: data,
    paymentsLoading: !error && !data,
    paymentsError: error,
    mutate,
  }
}


// USERS 


export const fetchAllUsers = () => {
  const { data, error, mutate } = useSWR(FETCH_USERS, fetcher);
  return {  
    users: data,
    usersLoading: !error && !data,
    usersError: error,
    mutate,
  }
}
export const fetchUser = (id) => {
  const { data, error, mutate } = useSWR(`${FETCH_SINGLE_USER}/${id}`, fetcher);
  return {  
    user: data,
    userLoading: !error && !data,
    userError: error,
    mutate,
  }
}

export const deleteUser = async (id) => {
  const result = await mutationRequest(`${DELETE_USER}/${id}`, "delete", false)
  return result;
}

export const blockUser = async (values, id) => {
  const result = await mutationRequest(`${BLOCK_USER}/${id}`, "put", values, false)
  return result;
}
export const unblockUser = async (values, id) => {
  const result = await mutationRequest(`${UNBLOCK_USER}/${id}`, "put", values, false)
  return result;
}




