import { Button } from "./components/Button"
import SideBar from "./components/LeftSide/SideBar"
import RightMain from "./components/RightSide/RightMain"
import { PlusIcon } from "./Icons/PlusIcon"
import ShareIcon from "./Icons/ShareIcon"
import AddCloseModel from "./UI/AddCloseModel.tsx"

const App = () => {
  return (
    // <div className="flex items-center justify-center gap-3 bg-neutral-900  ">
    //   <Button variant="secondary" text="share" size="sm" onClick={() => { }} />
    //   <Button startIcon={<ShareIcon size="md" />} variant="secondary" text="Share muller" size="md" onClick={() => { }} />
    //   <Button startIcon={<PlusIcon size="lg" />} variant="primary" text="Add Content" size="lg" onClick={() => { }} />
    // </div>

    <div className="">
      <AddCloseModel open={true}/>
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen w-full bg-neutral-950 text-white">
    
      <SideBar />
      <RightMain />
      

    </div>
    </div>
  )
}

export default App
