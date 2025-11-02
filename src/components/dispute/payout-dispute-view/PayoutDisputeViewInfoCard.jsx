const PayoutDisputeViewInfoCard = ({ message, disputeData }) => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="font-semibold text-base">Supporting Information</div>
      <div className="bg-white p-4 my-2 block text-sm">
        {message}
      </div>
      <div className="bg-white p-4 my-2 block text-sm">
        {disputeData?.additionalDetails}
      </div>
      {/* <div>
        <div className="mt-6 my-2">Attached File</div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex gap-3 bg-white w-[300px]">
            <img src="/assets/images/receipt.png" alt="" />
            <div className="flex flex-col justify-center gap-2">
              <span>receipt.png</span>
              <span className="text-merseLightText">465.11KB</span>
            </div>
          </div>
          <div className="flex gap-3 bg-white w-[300px]">
            <img src="/assets/images/receipt.png" alt="" />
            <div className="flex flex-col justify-center gap-2">
              <span>receipt.png</span>
              <span className="text-merseLightText">465.11KB</span>
            </div>
          </div>
          <div className="flex gap-3 bg-white w-[300px]">
            <img src="/assets/images/receipt.png" alt="" />
            <div className="flex flex-col justify-center gap-2">
              <span>receipt.png</span>
              <span className="text-merseLightText">465.11KB</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default PayoutDisputeViewInfoCard
