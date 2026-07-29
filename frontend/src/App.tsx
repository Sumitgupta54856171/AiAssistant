<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "./components/ui/sidebar"
import { AppSidebar } from "./components/Sidebar"
import ProfilePage from "./pages/ProfilePage"
=======
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
>>>>>>> 44a486f6532b2e61a13300b87c8e916ee5dfea29

function App() {
  const [route, setRoute] = useState<string>(window.location.hash || "#")

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
<<<<<<< HEAD
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">{route === "#/profile" ? "Profile" : "Dashboard"}</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-6">
          {route === "#/profile" ? (
            <ProfilePage />
          ) : (
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h2 className="text-xl font-semibold">Welcome</h2>
              <p className="mt-2 text-muted-foreground">Your content goes here.</p>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
=======
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
>>>>>>> 44a486f6532b2e61a13300b87c8e916ee5dfea29
  )
}

export default App