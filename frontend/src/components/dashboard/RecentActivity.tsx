import {
  MessageCircle,
  FileText,
  Phone,
  Upload,
  UserPlus,
} from "lucide-react"

const activities = [
  {
    icon: MessageCircle,
    bg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
    text: <><span className="font-semibold">Sarah Johnson</span> started a new chat</>,
    time: "2 minutes ago",
  },
  {
    icon: FileText,
    bg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
    text: <>Invoice <span className="font-semibold">#INV-2847</span> generated</>,
    time: "15 minutes ago",
  },
  {
    icon: Phone,
    bg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
    text: <>Voice call completed with <span className="font-semibold">Mike Chen</span></>,
    time: "1 hour ago",
  },
  {
    icon: Upload,
    bg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600",
    text: <>New document <span className="font-semibold">FAQ.pdf</span> uploaded</>,
    time: "3 hours ago",
  },
  {
    icon: UserPlus,
    bg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
    text: <>New customer <span className="font-semibold">Emma Wilson</span> added</>,
    time: "5 hours ago",
  },
]

export function RecentActivity() {
  return (
    <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
      </div>
      <div className="space-y-4">
        {activities.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">{item.text}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
