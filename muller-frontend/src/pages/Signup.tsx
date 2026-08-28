import { Button } from "../components/Button"
import { InputBox } from "../components/RightSide/ModelBox"



const Signup = () => {
  return (
    <div className='h-screen w-screen bg-gray-300 flex justify-center items-center '>
        <div className="bg-gray-800 max-w-60 rounded border p-6 flex gap-3 flex-col ">
            <div className="text-2xl font-bold text-center">
                Signup
            </div>
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Email"/>
            <InputBox placeholder="password"/>

            <div className="flex justify-center w-full pt-2.5">
            <Button variant="primary" text="Submit" size="lg"/>
        </div>
            
        </div>
        
    </div>
  )
}

export default Signup