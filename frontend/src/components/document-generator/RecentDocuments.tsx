import React from "react"

const rows = [
  { id: "INV-2847", type: "Invoice", customer: "Sarah Johnson", date: "Jan 15, 2025" },
  { id: "AGR-1284", type: "Agreement", customer: "Mike Chen", date: "Jan 14, 2025" },
  { id: "QUO-0923", type: "Quotation", customer: "Emma Wilson", date: "Jan 13, 2025" },
]

export function RecentDocuments() {
  return (
    <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Recent Documents</h3>
        <button className="text-sm text-blue-600 font-medium">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-2 font-semibold">Document</th>
              <th className="text-left py-3 px-2 font-semibold">Type</th>
              <th className="text-left py-3 px-2 font-semibold">Customer</th>
              <th className="text-left py-3 px-2 font-semibold">Date</th>
              <th className="text-right py-3 px-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-2 font-semibold">{r.id}</td>
                <td className="py-3 px-2">{r.type}</td>
                <td className="py-3 px-2">{r.customer}</td>
                <td className="py-3 px-2 text-gray-500">{r.date}</td>
                <td className="py-3 px-2 text-right">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentDocuments
