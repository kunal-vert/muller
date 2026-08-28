import { Button } from "../components/Button"
import { InputBox } from "../components/RightSide/ModelBox"



const Signin = () => {
  return (
    <div className='h-screen w-screen bg-gray-300 flex justify-center items-center '>
        <div className="bg-gray-800 max-w-60 rounded border p-6 flex gap-3 flex-col ">
            <div className="text-2xl font-bold text-center">
                SignIn
            </div>
            <InputBox placeholder="Username/Email"/>
            
            <InputBox placeholder="password"/>

            <div className="flex justify-center w-full pt-2.5">
            <Button variant="secondary" text="Submit" size="lg"/>
        </div>
            
        </div>
        
    </div>
  )
}

export default Signin