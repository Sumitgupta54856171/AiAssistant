import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { StatCard } from "@/components/dashboard/StatCard"
import { ActivityChart } from "@/components/dashboard/ActivityChart"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel"
import {
  MessageSquare,
  Phone,
  FileText,
  Users,
} from "lucide-react"

const stats = [
  {
    icon: MessageSquare,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
    label: "Active Conversations",
    value: "1,284",
    trend: "+12.5%",
  },
  {
    icon: Phone,
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
    label: "Calls Handled",
    value: "847",
    trend: "+8.2%",
  },
  {
    icon: FileText,
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
    label: "Documents Generated",
    value: "2,156",
    trend: "+24.1%",
  },
  {
    icon: Users,
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600",
    label: "Total Customers",
    value: "3,492",
    trend: "+5.7%",
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ActivityChart />
        <QuickActions />
      </div>

      {/* Recent Activity & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <NotificationsPanel />
      </div>
    </DashboardLayout>
  )
}
