import { Link, useLocation } from "react-router-dom"
import {
  Sparkles,
  LayoutDashboard,
  MessageCircle,
  PhoneCall,
  FileText,
  Database,
  BarChart3,
  Settings,
  User,
  LogOut,
  Crown,
  HeartPulse,
  ChevronsUpDown,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard", badge: null },
  { label: "AI Chat", icon: MessageCircle, to: "/ai-chat", badge: "12" },
  { label: "Voice AI", icon: PhoneCall, to: "/voice-ai", badge: null },
  { label: "Documents", icon: FileText, to: "/document-generator", badge: null },
  { label: "Knowledge Base", icon: Database, to: "/knowledge-base", badge: null },
  { label: "Analytics", icon: BarChart3, to: "/analytics", badge: null },
  { label: "Settings", icon: Settings, to: "/settings", badge: null },
]

const accountItems = [
  { label: "Profile", icon: User, to: "/profile" },
  { label: "Sign Out", icon: LogOut, to: "/login" },
]

interface DashboardSidebarProps {
  open: boolean
  onClose: () => void
}

export function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-gray-800">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">OmniAssist</span>
            </Link>
          </div>

          {/* Business Selector */}
          <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold">MediCare Hospital</div>
                <div className="text-xs text-gray-500">Hospital</div>
              </div>
              <ChevronsUpDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.to)
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "sidebar-link-active text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}

            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Account
              </p>
              {accountItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Upgrade Card */}
          <div className="p-4">
            <div className="rounded-2xl gradient-bg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5" />
                <span className="font-bold text-sm">Upgrade to Pro</span>
              </div>
              <p className="text-xs opacity-90 mb-3">
                Unlock unlimited messages, voice minutes & documents.
              </p>
              <button className="w-full bg-white text-blue-600 text-xs font-bold py-2 rounded-lg hover:scale-105 transition-transform">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
