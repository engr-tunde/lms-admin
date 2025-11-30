import { Award } from "lucide-react"

export const NoCertificateIssued = () => {
  return (
    <div className="text-center py-12">
      <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No certificates found</p>
      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
    </div>
  )
}