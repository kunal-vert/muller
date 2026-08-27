import { PlusIcon } from "../../Icons/PlusIcon"
import ShareIcon from "../../Icons/ShareIcon"
import { Button } from "../Button"
import Card from "./Card"


const RightMain = () => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto ">
      <div className="flex justify-end items-center gap-4">
        <Button  variant="primary" size="lg" text="Add Content" startIcon={<PlusIcon size="lg" />}  />
        <Button variant="secondary" size="lg" text="Share" startIcon={<ShareIcon size="lg" />} />

      </div>
      <div className="py-11 flex flex-wrap gap-3">
        <Card />
        <Card />

      </div>
    </div>
  )
}

export default RightMain