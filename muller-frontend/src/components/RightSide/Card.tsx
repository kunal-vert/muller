import ShareIcon from "../../Icons/ShareIcon"


const Card = () => {
  return (
    <div className="p-4 bg-black rounded-md shadow-md outline-slate-200 max-w-80 border-gray-900 ">
      <div className="flex justify-between items-center gap-3">
        <div className="text-gray-500 pr-2">
          <ShareIcon size="md" />
        </div>
        <div>
          Projects Ideas
        </div>
        <div className="flex items-center gap-6 text-gray-500">
          <div className="pr-2">
            <ShareIcon size="md" />
          </div>
          <div>
            <ShareIcon size="md" />
          </div>
        </div>
      </div>

      <div className="pt-8 " >
        {/* <iframe className="w-full" src="https://www.youtube.com/embed/ZNNL7b04_WI?si=Web4yYNQ9VVvzqIo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
       
       


      </div>

    </div>
  )
}

export default Card