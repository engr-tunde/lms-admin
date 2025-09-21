const BrandBusinessDocument = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm border-b-2 p-4">Business document</div>
      <div className="w-full h-full flex flex-col">
        <span className="p-4 text-sm">Submitted information</span>
        <div className="w-full h-full px-4">
          <div className="grid grid-cols-2 gap-8 bg-gray-100/50 p-4 w-full">
            <div className="col-span-1 flex flex-col gap-1 w-1/2">
              <span className="text-sm font-semibold">Business Tax ID</span>
              <span className="text-sm">409077809221</span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Linked account</span>
              <span className="text-sm">Flutterwave</span>
              <span className="text-xs">******123478</span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Representative ID</span>
              <span className="">
                <button className="text-xs text-white bg-black px-2 py-1 cursor-pointer">View</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandBusinessDocument