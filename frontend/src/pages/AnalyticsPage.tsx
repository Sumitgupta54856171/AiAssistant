import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { AnalyticsDashboard } from "@/components/dashboard/analytics/AnalyticsDashboard"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Analytics</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Review performance, customer activity, and channel insights in one place.
        </p>
      </div>
      <AnalyticsDashboard />
    </DashboardLayout>
  )
}
