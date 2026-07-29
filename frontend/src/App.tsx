import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import OtpVerification from "./pages/OtpVerification"
import BusinessSelection from "./pages/BusinessSelection"
import BusinessDescription from "./pages/BusinessDescription"
import AddLogo from "./pages/AddLogo"
import DashboardPage from "./pages/DashboardPage"
import DocumentGenerator from "./pages/DocumentGenerator"
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
        <Route path="/document-generator" element={<DocumentGenerator />} />
        <Route path="/settings" element={<AppShell />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App