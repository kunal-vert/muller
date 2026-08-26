import ShareIcon from "../../Icons/ShareIcon"


const Card = () => {
  return (
    <div className="p-4 bg-black rounded-md shadow-md outline-slate-200 max-w-72 border-gray-900 ">
      <div className="flex justify-between items-center">
        <div className="text-gray-500 pr-2">
          <ShareIcon size="md" />
        </div>
        Projects Ideas
        <div className="flex items-center gap-6 text-gray-500">
          <div className="pr-2">
            <ShareIcon size="md" />
          </div>
          <ShareIcon size="md" />
        </div>
      </div>

    </div>
  )
}

export default Card