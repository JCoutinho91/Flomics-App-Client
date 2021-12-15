import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DashBoardPage from "./pages/DashBoard/DashBoardPage";
import AnalysisPage from "./pages/AnalysisPage/AnalysisPage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import EditProjectPage from "./pages/ProfilePage/EditProfilePage/EditProfilePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import AdminLogin from "./pages/LoginPage/AdminLogin";
import AdminDashBoard from "./pages/AdminPages/AdminDashBoard/AdminDashBoard";
import AdminEditRequests from "./pages/AdminPages/AdminEditRequests/AdminEditRequests";
import AdminEditSamples from "./pages/AdminPages/AdminEditSamples/AdminEditSamples";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              {" "}
              <DashBoardPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/admindashboard"
          element={
            <IsPrivate>
              {" "}
              <AdminDashBoard />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/admindashboard/requests/:requestId"
          element={
            <IsPrivate>
              {" "}
              <AdminEditRequests />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/admindashboard/samples/:sampleId"
          element={
            <IsPrivate>
              {" "}
              <AdminEditSamples />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/analysis"
          element={
            <IsPrivate>
              {" "}
              <AnalysisPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/results"
          element={
            <IsPrivate>
              {" "}
              <ResultsPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/requests"
          element={
            <IsPrivate>
              {" "}
              <RequestsPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              {" "}
              <ProfilePage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              {" "}
              <EditProjectPage />{" "}
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
