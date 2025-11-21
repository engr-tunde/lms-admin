import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import DashboardCoursesPage from "./pages/courses/index.jsx";
import DashboardCreatePage from "./pages/create/index.jsx";
import DashboardHomePage from "./pages/home/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <div className="">
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/course" element={<DashboardCoursesPage />} />
              <Route path="/" element={<DashboardHomePage />} />

              <Route path="/create" element={<DashboardCreatePage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
