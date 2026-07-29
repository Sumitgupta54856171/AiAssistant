import { Link } from "react-router-dom"
import {
  MessageCircle,
  PhoneCall,
  FilePlus,
  UploadCloud,
  ChevronRight,
} from "lucide-react"

const actions = [
  {
    label: "Start AI Chat",
    desc: "Talk to your AI",
    icon: MessageCircle,
    bg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
    to: "/ai-chat",
  },
  {
    label: "Make Voice Call",
    desc: "AI voice agent",
    icon: PhoneCall,
    bg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
    to: "/voice-ai",
  },
  {
    label: "Generate Document",
    desc: "Invoice, agreement...",
    icon: FilePlus,
    bg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
    to: "/document-generator",
  },
  {
    label: "Upload Knowledge",
    desc: "Train your AI",
    icon: UploadCloud,
    bg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600",
    to: "/knowledge-base",
  },
]

export function QuickActions() {
  return (
    <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.label}
              to={action.to}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <Icon className={`w-5 h-5 ${action.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{action.label}</div>
                <div className="text-xs text-gray-500">{action.desc}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
