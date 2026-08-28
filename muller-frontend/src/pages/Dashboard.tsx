import { useState } from "react"
import SideBar from "../components/LeftSide/SideBar"
import RightMain from "../components/RightSide/RightMain"
import AddCloseModel from "../UI/AddCloseModel"


const Dashboard = () => {
  const [ModalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      <AddCloseModel open={ModalOpen} onClose={() => {
        setModalOpen(false)
      }} />


      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen w-full bg-neutral-950 text-white">
        <SideBar functionButton={setModalOpen} />
        <RightMain functionButton={setModalOpen} />
      </div>
    </div>
  )
}

export default Dashboard