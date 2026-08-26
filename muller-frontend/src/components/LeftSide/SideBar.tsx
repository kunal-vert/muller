import Logo from "./Logo"

import { SidebarItems } from "./SidebarItems"

const SideBar = () =>{
    return (
        <div className=" flex flex-col gap-8 
         m-4  ">
            <Logo/>
            <SidebarItems/>
        </div>
    )
}

export default SideBar