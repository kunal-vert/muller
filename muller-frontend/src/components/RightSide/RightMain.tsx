import { PlusIcon } from "../../Icons/PlusIcon"
import { Button } from "../Button"
import Card from "./Card"


const RightMain = () => {
  return (
    <div className="w-full h-full p-6 border-x-2 border-gray-950">
        <Button startIcon={<PlusIcon size="lg" />} variant="primary" text="Add Content" size="lg" onClick={() => { }}/>
    </div>
  )
}

export default RightMain