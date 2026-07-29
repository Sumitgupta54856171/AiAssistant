import { CheckCircle2, MessageCircle, Phone, Upload, UserPlus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    title: "New chat conversation started",
    description: "Sarah Johnson initiated a chat about appointment booking",
    time: "2 minutes ago",
    icon: MessageCircle,
    iconClassName: "bg-gradient-to-r from-blue-600 to-violet-600",
  },
  {
    title: "Invoice generated successfully",
    description: "Invoice #INV-2847 for $341.00 sent to Sarah Johnson",
    time: "15 minutes ago",
    icon: CheckCircle2,
    iconClassName: "bg-emerald-500",
  },
  {
    title: "Voice call completed",
    description: "Mike Chen — 5m 23s — Appointment scheduled",
    time: "1 hour ago",
    icon: Phone,
    iconClassName: "bg-amber-500",
  },
  {
    title: "New document uploaded",
    description: "FAQ.pdf added to the knowledge base",
    time: "3 hours ago",
    icon: Upload,
    iconClassName: "bg-slate-600",
  },
  {
    title: "New customer registered",
    description: "Emma Wilson signed up via WhatsApp",
    time: "5 hours ago",
    icon: UserPlus,
    iconClassName: "bg-indigo-500",
  },
]

export function ActivityTimeline() {
  return (
    <Card className="border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Activity timeline</CardTitle>
            <CardDescription>Recent events from your assistant workspace</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-6 pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.title} className="relative">
                <div className={`absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full ${activity.iconClassName}`}>
                  <Icon className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                <p className="mt-1 font-semibold">{activity.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
