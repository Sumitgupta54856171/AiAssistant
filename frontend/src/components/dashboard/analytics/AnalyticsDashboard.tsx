import { DollarSign, ShoppingBag, Users, CalendarCheck } from "lucide-react"
import { KpiCard } from "./KpiCard"
import { RevenueTrendChart } from "./RevenueTrendChart"
import { ChannelBreakdown } from "./ChannelBreakdown"
import { ActivityTimeline } from "./ActivityTimeline"

const stats = [
  {
    icon: DollarSign,
    label: "Total revenue",
    value: "$48,592",
    change: "+18.2%",
    iconClassName: "bg-blue-100 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
  },
  {
    icon: ShoppingBag,
    label: "Total orders",
    value: "1,284",
    change: "+12.5%",
    iconClassName: "bg-violet-100 text-violet-600 dark:bg-violet-950/30 dark:text-violet-400",
  },
  {
    icon: Users,
    label: "New customers",
    value: "3,492",
    change: "+24.1%",
    iconClassName: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  {
    icon: CalendarCheck,
    label: "Appointments",
    value: "847",
    change: "+8.7%",
    iconClassName: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
  },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <KpiCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <RevenueTrendChart />
        <ChannelBreakdown />
      </div>

      <ActivityTimeline />
    </div>
  )
}
