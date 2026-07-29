import { useState } from "react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import { DashboardOverview } from "@/components/dashboard/DashboardOverview"
import { SettingsPanel } from "@/components/settings/SettingsPanel"

export function AppShell() {
  const [activeView, setActiveView] = useState<"dashboard" | "settings">("dashboard")

  return (
    <SidebarProvider>
      <AppSidebar activeView={activeView} onNavigate={setActiveView} />
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">
            {activeView === "dashboard" ? "Dashboard" : "Settings"}
          </h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-6">
          {activeView === "dashboard" ? <DashboardOverview /> : <SettingsPanel />}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
