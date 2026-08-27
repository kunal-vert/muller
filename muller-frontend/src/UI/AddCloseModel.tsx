import { Button } from "../components/Button"
import { InputBox } from "../components/RightSide/ModelBox"
import CrossIcon from "../Icons/CrossIcon"

// ADDED: TypeScript interface to define the props
interface AddCloseModelProps {
  open: boolean;
  onClose: () => void;
}

// FIXED: Applied the interface to the props
const AddCloseModel = ({ open, onClose }: AddCloseModelProps) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 h-screen w-screen bg-gray-600/90 flex items-center justify-center z-50">
          <div className="bg-gray-900 w-full max-w-sm rounded shadow-2xl p-6 flex flex-col gap-6 ">
            <div className="flex justify-end cursor-pointer">
              <div onClick={onClose}>
                <CrossIcon />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <InputBox onChange={() => {}} placeholder={"Title"} />
              <InputBox onChange={() => {}} placeholder={"Content"} />
            </div>

            <div className="w-full flex justify-center">
              <Button variant="primary" size="lg" text="Submit" onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCloseModel