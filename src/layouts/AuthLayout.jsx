// import { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import { checkSession } from "../api/index"; // you already have this

// const AuthLayout = () => {
//   useEffect(() => {
//     const verify = async () => {
//       const session = await checkSession();

//       if (session?.data?.authenticated) {
//         window.location.href = "/";
//       }
//     };

//     verify();
//   }, []);

//   return (
//     <>
//       <div className="w-[100wv] h-[100vh]">
//         <div className="max-w-[450px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[90px] pb-[150px] md:py-0">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthLayout;
