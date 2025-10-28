import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import DashboardOverviewPage from "./pages/overview/index.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import DashboardOrdersPage from "./pages/orders/index.jsx";
import DashboardPayoutPage from "./pages/payouts/index.jsx";
import DashboardDisputePage from "./pages/dispute/index.jsx";
import OrderDisputeViewPage from "./pages/dispute/order-dispute-view.jsx";
import DashboardMembersPage from "./pages/members/index.jsx";
import DashboardSettingsPage from "./pages/settings/index.jsx";
import DashboardProductPage from "./pages/products/index.jsx";
import DashboardBrandsPage from "./pages/brands/index.jsx";
import DashboardAnalyticsPage from "./pages/analytics/index.jsx";
import OrderViewPage from "./pages/orders/order-view.jsx";
import DashboardBrandDetailsPage from "./pages/brands/brand-details.jsx";
import PayoutDisputeViewPage from "./pages/dispute/payout-dispute-view.jsx";
import PayoutDetailPage from "./pages/payouts/payout-detail.jsx";
import VerifyForgotPasswordPage from "./pages/auth/verify-forgot-password/index.jsx";
import VerifyLoginPage from "./pages/auth/verify-login/index.jsx";
import DashboardBrandRequests from "./pages/brands/brand-requests.jsx";
import DashboardUsersPage from "./pages/users/index.jsx";
import DashboardUsersViewPage from "./pages/users/user-view.jsx";

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
              <Route path="/orders" element={<DashboardOrdersPage />} />
              <Route path="/orders/:id" element={<OrderViewPage />} />
              <Route path="/payout" element={<DashboardPayoutPage />} />
              <Route path="/payout/:id" element={<PayoutDetailPage />} />

              <Route path="/dispute" element={<DashboardDisputePage />} />
              <Route
                path="/dispute-order/:id"
                element={<OrderDisputeViewPage />}
              />
              <Route
                path="/dispute-payout/:id"
                element={<PayoutDisputeViewPage />}
              />
              <Route path="/users" element={<DashboardUsersPage />} />
              <Route path="/users/:id" element={<DashboardUsersViewPage />} />
              
              <Route path="/members" element={<DashboardMembersPage />} />
              <Route path="/analytics" element={<DashboardAnalyticsPage />} />
              <Route path="/settings" element={<DashboardSettingsPage />} />
              <Route path="/products" element={<DashboardProductPage />} />

              <Route path="/brands" element={<DashboardBrandsPage />} />
              <Route path="/brands/requests" element={<DashboardBrandRequests />} />
              <Route
                path="/brands/:id"
                element={<DashboardBrandDetailsPage />}
              />
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
