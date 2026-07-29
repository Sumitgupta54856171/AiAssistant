const days = [
  { label: "Mon", height: "60%" },
  { label: "Tue", height: "80%" },
  { label: "Wed", height: "45%" },
  { label: "Thu", height: "90%" },
  { label: "Fri", height: "70%" },
  { label: "Sat", height: "55%" },
  { label: "Sun", height: "85%" },
]

export function ActivityChart() {
  return (
    <div className="lg:col-span-2 glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Activity Overview</h3>
          <p className="text-sm text-gray-500">Last 7 days performance</p>
        </div>
        <select className="text-sm px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-0 focus:outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="h-64 flex items-end justify-between gap-2 sm:gap-4">
        {days.map((day) => (
          <div key={day.label} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full chart-bar rounded-t-lg gradient-bg transition-all duration-700"
              style={{ height: day.height }}
            />
            <span className="text-xs text-gray-500">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
