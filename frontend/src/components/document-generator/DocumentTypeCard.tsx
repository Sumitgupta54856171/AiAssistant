import React from "react"

type Props = {
  title: string
  subtitle?: string
  Icon: React.ComponentType<{ className?: string }>
  selected?: boolean
  onClick?: () => void
}

export function DocumentTypeCard({ title, subtitle, Icon, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={
        "doc-type-card glass rounded-2xl p-5 border-2 border-gray-200 dark:border-gray-800 cursor-pointer transition-all " +
        (selected ? "selected" : "")
      }
    >
      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800/30 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </div>
      <h3 className="font-bold text-sm">{title}</h3>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  )
}

export default DocumentTypeCard
