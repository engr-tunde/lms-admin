const PayoutDisputeViewInfoCard = () => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="font-semibold text-base">Supporting Information</div>
      <div className="bg-white p-4 my-2 block text-sm">
        The customer’s order was shipped on 28th August with tracking number NG12345. The courier confirmed delivery on 31st August. I’ve attached the delivery receipt and a screenshot of the tracking update. The payout discrepancy might be due to the courier’s delayed status update.
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default PayoutDisputeViewInfoCard
