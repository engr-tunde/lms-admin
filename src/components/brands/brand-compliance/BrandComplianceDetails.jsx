const BrandComplianceDetails = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm border-b-2 p-4">Brand details</div>
      <div className="w-full h-full flex flex-col">
        <span className="p-4 text-sm">Submitted information</span>
        <div className="w-full h-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100/50 p-4 w-full">
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Business Name</span>
              <span className="text-sm">StylishCo</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Country</span>
              <span className="text-sm">Nigeria</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand Type</span>
              <span className="text-sm">Menswear</span>
            </div>
            <div className="col-span-1 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand registration number</span>
              <span className="text-sm">REG-12345678</span>
            </div>
            <div className="col-span-1 lg:col-span-2 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Company Address</span>
              <span className="text-sm">12B, funke Ayoade Street, Victoria Island, Lagos, Nigeria</span>
            </div>
            <div className="col-span-1 lg:col-span-2 gap-1 flex flex-col">
              <span className="text-sm font-semibold">Brand description</span>
              <span className="text-sm">Contemporary street wear with premium fabrics and clean designs. Versatile pieces that work from city to weekend. Quality focused, sustainability made</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandComplianceDetails