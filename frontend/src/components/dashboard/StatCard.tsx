import { type LucideIcon, TrendingUp } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  label: string
  value: string
  trend: string
}

export function StatCard({ icon: Icon, iconBg, iconColor, label, value, trend }: StatCardProps) {
  return (
    <div className="stat-card glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> {trend}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}
