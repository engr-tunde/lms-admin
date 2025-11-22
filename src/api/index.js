import useSWR from "swr";
import { SIGNIN, CHECK_SESSION, SIGNOUT, ADD_CATEGORY, GET_CATEGORIES, ADD_OVERVIEW } from "../constants/routes";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";

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


// CREATE COURSE 

export const addCategory = async (values) => {
  const result = await mutationRequest(ADD_CATEGORY, "post", values, true)
  return result;
}

export const fetchCategories = () => {
  const { data, error, mutate } = useSWR(GET_CATEGORIES, fetcher);
  return {  
    categories: data,
    categoriesLoading: !error && !data,
    categoriesError: error,
    mutate,
  }
}


export const addOverview = async (values) => {
  const result = await mutationRequest(ADD_OVERVIEW, "post", values, true)
  return result;
}
