import React from "react"

export function PreviewPanel({ data }: { data?: any }) {
  const invoice = data?.invoice ?? "INV-0001"
  const date = data?.date ?? "Jan 15, 2025"
  const billTo = data?.billTo ?? "Customer"
  const address = data?.address ?? "Address"
  const items = data?.items ?? []
  const subtotal = data?.subtotal ?? 0
  const tax = data?.tax ?? 0
  const total = data?.total ?? 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner border border-gray-200 dark:border-gray-700 aspect-[3/4] overflow-y-auto">
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-2">
          <svg className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold">INVOICE</h2>
        <p className="text-sm text-gray-500">MediCare Hospital</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <p className="text-gray-500 text-xs">Bill To:</p>
          <p className="font-semibold">{billTo}</p>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-xs">Invoice #</p>
          <p className="font-semibold">{invoice}</p>
          <p className="text-gray-500 text-xs mt-1">Date: {date}</p>
        </div>
      </div>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-2">Description</th>
            <th className="text-center py-2">Qty</th>
            <th className="text-right py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it: any, i: number) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="py-2">{it.description}</td>
              <td className="text-center">{it.qty}</td>
              <td className="text-right">${(it.qty * it.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right space-y-1 text-sm">
        <p>Subtotal: ${subtotal}.00</p>
        <p>Tax (10%): ${tax}.00</p>
        <p className="text-xl font-bold text-indigo-600">Total: ${total}.00</p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">Thank you for your business!</div>
    </div>
  )
}

export default PreviewPanel
