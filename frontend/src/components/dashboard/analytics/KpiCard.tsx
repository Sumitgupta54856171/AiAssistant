import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface KpiCardProps {
  icon: LucideIcon
  label: string
  value: string
  change: string
  iconClassName: string
  trendClassName?: string
}

export function KpiCard({
  icon: Icon,
  label,
  value,
  change,
  iconClassName,
  trendClassName = "text-emerald-600 dark:text-emerald-400",
}: KpiCardProps) {
  return (
    <Card className="border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
          </div>
          <div className={`rounded-xl p-2.5 ${iconClassName}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${trendClassName}`}>
          <span>▲</span>
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  )
}
