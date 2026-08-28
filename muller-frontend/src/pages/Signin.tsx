import { useRef } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/RightSide/ModelBox"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"



const Signin = () => {
  const IdentifierRef = useRef<any>(null)
  const PasswordeRef = useRef<any>(null)
  const Navigate = useNavigate()

  async function SigninHandler() {
    const identifier = IdentifierRef.current.value;
    const password = PasswordeRef.current.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        identifier,
        password
      })
      const jwt = response.data.token;
      localStorage.setItem("token", jwt)
      alert(response.data.message)
      Navigate("/dashboard")
    } catch (error: any) {
      alert(error.response?.data?.message || "Signin failed")
    }
  }

  return (
    <div className='h-screen w-screen bg-gray-300 flex justify-center items-center '>
      <div className="bg-gray-800 w-full max-w-sm rounded border p-7 flex gap-3 flex-col ">
        <div className="text-2xl font-bold text-center">
          SignIn
        </div>
        <InputBox reference={IdentifierRef} placeholder="Username/Email" />

        <InputBox reference={PasswordeRef} placeholder="password" />

        <div className="flex justify-center w-full pt-2.5">
          <Button onClick={SigninHandler} loading={false} variant="secondary" text="Signin" size="lg" />
        </div>

      </div>

    </div>
  )
}

export default Signin