import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import DashboardCoursesPage from "./pages/courses/index.jsx";
import DashboardCourseCreatePage from "./pages/courses/CourseCreatePage.jsx"
import DashboardPaymentsPage from "./pages/payments/index.jsx";
import DashboardOverviewPage from "./pages/overview/index.jsx";
import DashboardCourseAssessmentPage from "./pages/courses/CourseAssessmentPage.jsx";

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

              <Route path="courses">
                <Route index element={<DashboardCoursesPage />} />
                <Route path="create" element={<DashboardCourseCreatePage />} />
                <Route path="create/:id" element={<DashboardCourseCreatePage />} />
                <Route path="assessment/:id" element={<DashboardCourseAssessmentPage />} />
              </Route>

              <Route path="finances" element={<DashboardPaymentsPage />} />
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
