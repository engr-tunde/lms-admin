import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmailPage from "./pages/auth/verify-account/index.jsx";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardOverviewPage from "./pages/overview/index.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

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
              <Route path="/" element={<DashboardOverviewPage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/verify-account" element={<VerifyEmailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
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
