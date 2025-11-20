// // import useSWR from "swr";
// import {
//   SIGNIN,
//   CHECK_SESSION,

// } from "../constants/routes";
// import { mutationRequest } from "./sendData";
// import { fetcher, sessionFetcher } from "./fetcher";

// // WEBSITE
// // Tokens

// // Auth
// // export const checkSession = () => {
// //   const { data, error, mutate } = useSWR(CHECK_SESSION, sessionFetcher);
// //   return {
// //     session: data,
// //     sessionLoading: !error && !data,
// //     sessionError: error,
// //     mutate,
// //   };
// // };

// export const checkSession = async () => {
//   const result = await mutationRequest(CHECK_SESSION, "get");
//   return result;
// };




// export const login = async (values) => {
//   const result = await mutationRequest(SIGNIN, "post", values, false);
//   return result;
// };