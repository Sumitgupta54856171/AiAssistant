import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Item = { id: string; description: string; qty: number; price: number }

export function DocumentForm({ onChange }: { onChange?: (data: any) => void }) {
  const [invoice, setInvoice] = useState("INV-2847")
  const [date, setDate] = useState("2025-01-15")
  const [billTo, setBillTo] = useState("Sarah Johnson")
  const [address, setAddress] = useState("123 Main St, New York, USA")
  const [items, setItems] = useState<Item[]>([
    { id: "1", description: "Consultation", qty: 1, price: 150 },
    { id: "2", description: "Lab Tests", qty: 2, price: 80 },
  ])

  const subtotal = items.reduce((s, it) => s + it.qty * it.price, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  const updateItem = (id: string, patch: Partial<Item>) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)))
  }

  const addItem = () => {
    setItems((p) => [...p, { id: Date.now().toString(), description: "", qty: 1, price: 0 }])
  }

  const removeItem = (id: string) => setItems((p) => p.filter((it) => it.id !== id))

  // notify parent
  ;(function notify() {
    onChange?.({ invoice, date, billTo, address, items, subtotal, tax, total })
  })()

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Document Details</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Invoice #</label>
            <Input value={invoice} onChange={(e) => setInvoice(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bill To</label>
          <Input value={billTo} onChange={(e) => setBillTo(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea rows={2} className="w-full px-3 py-2 rounded-xl border" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Items</label>
          <div className="space-y-2">
            {items.map((it) => (
              <div key={it.id} className="grid grid-cols-12 gap-2">
                <input className="col-span-6 px-3 py-2 rounded-lg border" value={it.description} onChange={(e) => updateItem(it.id, { description: e.target.value })} />
                <input type="number" className="col-span-2 px-3 py-2 rounded-lg border" value={it.qty} onChange={(e) => updateItem(it.id, { qty: Number(e.target.value) })} />
                <input type="number" className="col-span-3 px-3 py-2 rounded-lg border" value={it.price} onChange={(e) => updateItem(it.id, { price: Number(e.target.value) })} />
                <button type="button" className="col-span-1 text-red-500" onClick={() => removeItem(it.id)}>
                  Remove
                </button>
              </div>
            ))}

            <button type="button" className="text-sm text-blue-600 font-semibold" onClick={addItem}>
              + Add item
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <div className="flex justify-between text-sm"><span className="text-gray-500">Subtotal</span><span className="font-semibold">${subtotal}.00</span></div>
          <div className="flex justify-between text-sm"><span className="text-gray-500">Tax (10%)</span><span className="font-semibold">${tax}.00</span></div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 dark:border-gray-700"><span>Total</span><span className="text-indigo-600 font-bold">${total}.00</span></div>
        </div>

        <Button className="w-full mt-2">Generate with AI</Button>
      </div>
    </div>
  )
}

export default DocumentForm
