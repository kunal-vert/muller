import { useState } from "react"
import SideBar from "./components/LeftSide/SideBar"
import RightMain from "./components/RightSide/RightMain"
import AddCloseModel from "./UI/AddCloseModel"


const App = () => {
  const [ModalOpen, setModalOpen] = useState<boolean>(true)

  return (
    <div>
      <AddCloseModel open={ModalOpen} onClose={() => {
        setModalOpen(false)
      }} />

     nn
       
      
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen w-full bg-neutral-950 text-white">
        <SideBar functionButton={setModalOpen} />
        <RightMain functionButton={setModalOpen} />
      </div>
    </div>
  )
}

export default App