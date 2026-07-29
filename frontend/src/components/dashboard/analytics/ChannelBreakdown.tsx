import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const channels = [
  { name: "WhatsApp", share: 45 },
  { name: "Voice Calls", share: 30 },
  { name: "Web Chat", share: 15 },
  { name: "Email", share: 10 },
]

export function ChannelBreakdown() {
  return (
    <Card className="border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <CardHeader>
        <CardTitle>Channel distribution</CardTitle>
        <CardDescription>Customer engagement by touchpoint</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {channels.map((channel) => (
          <div key={channel.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium">{channel.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{channel.share}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600" style={{ width: `${channel.share}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
