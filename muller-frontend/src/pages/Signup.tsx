import { useRef } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/RightSide/ModelBox"
import axios from "axios"
import { BACKEND_URL } from "../config"



const Signup = () => {

  const UsernameRef = useRef<any>(null)
  const EmailRef = useRef<any>(null)
  const PasswordeRef = useRef<any>(null)

  async function SignupHandler() {
    const username = UsernameRef.current?.value
    const email = EmailRef.current?.value
    const password = PasswordeRef.current?.value

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        email,
        password
      })
      alert("You have signed up!")
    } catch (e: any) {
      alert(e.response?.data?.message || "Signup failed")
    }
  
  }


  return (
    <div className='h-screen w-screen bg-gray-300 flex justify-center items-center '>
      <div className="bg-gray-800 max-w-96 rounded border p-6  flex gap-3 flex-col ">
        <div className="text-2xl font-bold text-center">
          Signup
        </div>
        <InputBox reference={UsernameRef} placeholder="Username" />
        <InputBox reference={EmailRef} placeholder="Email" />
        <InputBox reference={PasswordeRef} placeholder="password" />

        <div className="flex justify-center w-full pt-2.5">
          <Button onClick={SignupHandler} variant="primary" text="Signup" size="lg" loading={false} />
        </div>

      </div>

    </div>
  )
}

export default Signup