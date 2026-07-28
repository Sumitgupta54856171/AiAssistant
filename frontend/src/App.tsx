import { SidebarProvider, SidebarTrigger, SidebarInset } from "./components/ui/sidebar"
import { AppSidebar } from "./components/Sidebar"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-6">
          <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold">Welcome</h2>
            <p className="mt-2 text-muted-foreground">
              Your content goes here.
            </p>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App