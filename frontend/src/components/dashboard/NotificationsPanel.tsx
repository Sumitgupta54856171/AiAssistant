import { Sparkles, Check, AlertTriangle } from "lucide-react"

const notifications = [
  {
    icon: Sparkles,
    bg: "bg-blue-500",
    title: "AI Model Updated",
    desc: "Your AI is now 15% more accurate. Check the improvements.",
    time: "Just now",
    highlighted: true,
  },
  {
    icon: Check,
    bg: "bg-green-500",
    title: "Monthly Report Ready",
    desc: "Your November analytics report is available.",
    time: "2 hours ago",
    highlighted: false,
  },
  {
    icon: AlertTriangle,
    bg: "bg-orange-500",
    title: "Storage Almost Full",
    desc: "You've used 85% of your storage. Upgrade for more.",
    time: "Yesterday",
    highlighted: false,
  },
]

export function NotificationsPanel() {
  return (
    <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Notifications</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Mark all read</button>
      </div>
      <div className="space-y-3">
        {notifications.map((n, i) => {
          const Icon = n.icon
          return (
            <div
              key={i}
              className={`p-4 rounded-xl ${
                n.highlighted
                  ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  : "bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${n.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{n.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{n.desc}</p>
                  <p className="text-xs text-gray-500 mt-2">{n.time}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
