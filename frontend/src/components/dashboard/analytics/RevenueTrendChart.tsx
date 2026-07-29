import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const values = [90, 105, 118, 97, 132, 128, 150, 145, 162, 176, 188, 214]

export function RevenueTrendChart() {
  const max = Math.max(...values)

  return (
    <Card className="border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Revenue growth</CardTitle>
            <CardDescription>Performance across the last 12 months</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-72 rounded-2xl bg-gradient-to-br from-blue-50/80 to-violet-50/80 p-4 dark:from-blue-950/20 dark:to-violet-950/20">
          <svg viewBox="0 0 600 260" className="h-full w-full" preserveAspectRatio="none">
            <path
              d={`M 0 ${260 - (values[0] / max) * 180} ${values
                .map((value, index) => `L ${index * 50} ${260 - (value / max) * 180}`)
                .join(" ")} L 550 260 L 0 260 Z`}
              fill="url(#analyticsArea)"
            />
            <path
              d={values.map((value, index) => `${index === 0 ? "M" : "L"} ${index * 50} ${260 - (value / max) * 180}`).join(" ")}
              fill="none"
              stroke="url(#analyticsStroke)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="analyticsArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="analyticsStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
