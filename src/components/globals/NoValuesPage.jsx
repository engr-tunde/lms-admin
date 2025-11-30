import { Award, Book, DollarSign, Users2 } from "lucide-react"
import { UsersIcon } from "./Icons"

export const NoCertificateIssued = () => {
  return (
    <div className="text-center py-12">
      <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No certificates found</p>
      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
    </div>
  )
}
export const NoCourseCreated = () => {
  return (
    <div className="text-center py-12">
      <Book className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No course created yet</p>
      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or create new course</p>
    </div>
  )
}
export const NoPayoutMade = () => {
  return (
    <div className="text-center py-12">
      <DollarSign className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No course Payout Available</p>
      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or request payout</p>
    </div>
  )
}
export const NoUserAvailable = () => {
  return (
    <div className="text-center py-12">
      <UsersIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No Course Student Available</p>
      <p className="text-sm text-gray-400 mt-1">No student have enrolled for this course yet</p>
    </div>
  )
}
export const NoAdminsAvailable = () => {
  return (
    <div className="text-center py-12">
      <Users2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-500">No course Admin Available</p>
      <p className="text-sm text-gray-400 mt-1">Try adjusting your filters or add an Admin or collaborator</p>
    </div>
  )
}