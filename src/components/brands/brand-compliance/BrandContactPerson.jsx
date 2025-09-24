const BrandContactPerson = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm border-b-2 p-4">Contact person</div>
      <div className="w-full h-full flex flex-col">
        <span className="p-4 text-sm">Submitted information</span>
        <div className="w-full h-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100/50 p-4 w-full">
            <div className="col-span-1 flex flex-col gap-1 w-1/2">
              <span className="text-sm font-semibold">Phone number</span>
              <span className="text-sm">+23409077809921</span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Email</span>
              <span className="text-sm">Contactperson@stylist.com</span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Main contact for logistics</span>
              <span className="text-sm">Standard delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandContactPerson