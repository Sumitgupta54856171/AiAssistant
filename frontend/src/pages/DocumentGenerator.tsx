import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import DocumentTypeCard from "@/components/document-generator/DocumentTypeCard"
import DocumentForm from "@/components/document-generator/DocumentForm"
import PreviewPanel from "@/components/document-generator/PreviewPanel"
import RecentDocuments from "@/components/document-generator/RecentDocuments"
import {
  FileContract,
  Receipt,
  FileBadge,
  Award,
  FileBarChart,
  Briefcase,
  UserCheck,
  ShoppingBag,
} from "lucide-react"

export default function DocumentGenerator() {
  const [selected, setSelected] = useState("invoice")
  const [data, setData] = useState<any>(null)

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Choose document type</h2>
          <p className="text-gray-500 mb-6">Select what you want to generate. AI will create it instantly.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <DocumentTypeCard title="Agreement" subtitle="Legal contracts" Icon={FileContract} selected={selected === 'agreement'} onClick={() => setSelected('agreement')} />
            <DocumentTypeCard title="Invoice" subtitle="Billing & payments" Icon={Receipt} selected={selected === 'invoice'} onClick={() => setSelected('invoice')} />
            <DocumentTypeCard title="Quotation" subtitle="Price estimates" Icon={FileBadge} selected={selected === 'quotation'} onClick={() => setSelected('quotation')} />
            <DocumentTypeCard title="Certificate" subtitle="Achievements" Icon={Award} selected={selected === 'certificate'} onClick={() => setSelected('certificate')} />
            <DocumentTypeCard title="Report" subtitle="Business reports" Icon={FileBarChart} selected={selected === 'report'} onClick={() => setSelected('report')} />
            <DocumentTypeCard title="Offer Letter" subtitle="Job offers" Icon={Briefcase} selected={selected === 'offer'} onClick={() => setSelected('offer')} />
            <DocumentTypeCard title="Experience Letter" subtitle="Employment proof" Icon={UserCheck} selected={selected === 'experience'} onClick={() => setSelected('experience')} />
            <DocumentTypeCard title="Purchase Order" subtitle="Order requests" Icon={ShoppingBag} selected={selected === 'purchase'} onClick={() => setSelected('purchase')} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <DocumentForm onChange={(d) => setData(d)} />
          </div>

          <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Preview</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Download</button>
              </div>
            </div>
            <PreviewPanel data={data} />
          </div>
        </div>

        <div className="mt-8">
          <RecentDocuments />
        </div>
      </div>
    </DashboardLayout>
  )
}
