import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DashboardMembersPage from "./pages/members/index.jsx";
import DashboardSettingsPage from "./pages/settings/index.jsx";
import VerifyForgotPasswordPage from "./pages/auth/verify-forgot-password/index.jsx";
import VerifyLoginPage from "./pages/auth/verify-login/index.jsx";
import DashboardUsersPage from "./pages/users/index.jsx";
import DashboardUsersViewPage from "./pages/users/user-view.jsx";

import DashboardCoursesPage from "./pages/courses/index.jsx"
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
              <Route path="/users" element={<DashboardUsersPage />} />
              <Route path="/users/:id" element={<DashboardUsersViewPage />} />
              
              <Route path="/members" element={<DashboardMembersPage />} />
              <Route path="/settings" element={<DashboardSettingsPage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify-login" element={<VerifyLoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="/verify-forgot-password"
                element={<VerifyForgotPasswordPage />}
              />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
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
