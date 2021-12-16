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
import EditProjectPage from "./pages/ProfilePage/EditProfilePage/EditProfilePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import RequestsPage from "./pages/RequestsPage/RequestsPage";
import AdminDashBoard from "./pages/AdminPages/AdminDashBoard/AdminDashBoard";
import AdminEditRequests from "./pages/AdminPages/AdminEditRequests/AdminEditRequests";
import AdminEditSamples from "./pages/AdminPages/AdminEditSamples/AdminEditSamples";
import VariantData from "./pages/VariantData/VariantData"
import AlphaPage from "./pages/AlphaPage/AlphaPage"
import BetaPage from "./pages/BetaPage/BetaPage"
import DeltaPage from "./pages/DeltaPage/DeltaPage"
import GammaPage from "./pages/GammaPage/GammaPage"
import MuPage from "./pages/MuPage/MuPage"
import OmicronPage from "./pages/OmicronPage/OmicronPage"
import LambdaPage from "./pages/LambdaPage/LambdaPage"
import KappaPage from "./pages/KappaPage/KappaPage"



function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              {" "}
              <DashBoardPage />
              {" "}
            </IsPrivate>
          }
        />
        <Route
          path="/admindashboard"
          element={
            <IsPrivate>
              {" "}
              <AdminDashBoard />
              {" "}
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
          path="/alpha"
          element={
            <IsPrivate>
              {" "}
              <AlphaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/beta"
          element={
            <IsPrivate>
              {" "}
              <BetaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/delta"
          element={
            <IsPrivate>
              {" "}
              <DeltaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/gamma"
          element={
            <IsPrivate>
              {" "}
              <GammaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/kappa"
          element={
            <IsPrivate>
              {" "}
              <KappaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/lambda"
          element={
            <IsPrivate>
              {" "}
              <LambdaPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/mu"
          element={
            <IsPrivate>
              {" "}
              <MuPage />{" "}
            </IsPrivate>
          }
        />
         <Route
          path="/omicron"
          element={
            <IsPrivate>
              {" "}
              <OmicronPage />{" "}
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
          path="/variant"
          element={
            <IsPrivate>
              {" "}
              <VariantData />
              {" "}
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
