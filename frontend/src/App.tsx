import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import OtpVerification from "./pages/OtpVerification"
import BusinessSelection from "./pages/BusinessSelection"
import BusinessDescription from "./pages/BusinessDescription"
import AddLogo from "./pages/AddLogo"
import DashboardPage from "./pages/DashboardPage"
<<<<<<< HEAD
import AnalyticsPage from "./pages/AnalyticsPage"
=======
import DocumentGenerator from "./pages/DocumentGenerator"
>>>>>>> 44a486f6532b2e61a13300b87c8e916ee5dfea29
import { AppShell } from "./components/AppShell"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/business-selection" element={<BusinessSelection />} />
        <Route path="/business-description" element={<BusinessDescription />} />
        <Route path="/add-logo" element={<AddLogo />} />
        <Route path="/dashboard" element={<DashboardPage />} />
<<<<<<< HEAD
        <Route path="/analytics" element={<AnalyticsPage />} />
=======
        <Route path="/document-generator" element={<DocumentGenerator />} />
>>>>>>> 44a486f6532b2e61a13300b87c8e916ee5dfea29
        <Route path="/settings" element={<AppShell />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App