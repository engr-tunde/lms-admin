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
import DashboardOrdersPage from "./pages/orders/index.jsx";
import DashboardPayoutPage from "./pages/payouts/index.jsx"
import DashboardDisputePage from "./pages/dispute/index.jsx";
import DashboardMembersPage from "./pages/members/index.jsx";
import DashboardSettingsPage from "./pages/settings/index.jsx";
import DashboardProductPage from "./pages/products/index.jsx";
import DashboardBrandsPage from "./pages/brands/index.jsx";

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
              <Route path="/orders" element={<DashboardOrdersPage />}/>
              <Route path="/payout" element={<DashboardPayoutPage />}/>
              <Route path="/dispute" element={<DashboardDisputePage />}/>
              <Route path="/members" element={<DashboardMembersPage />}/>
              <Route path="/settings" element={<DashboardSettingsPage />}/>
              <Route path="/products" element={<DashboardProductPage />}/>
              <Route path="/brands" element={<DashboardBrandsPage />}/>
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
