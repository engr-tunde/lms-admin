

const NoDataPage = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div>
        <img src="/assets/images/data-placeholder.png" alt="" />
      </div>
      <div>{message}</div>
    </div>
  )
}


export default NoDataPage