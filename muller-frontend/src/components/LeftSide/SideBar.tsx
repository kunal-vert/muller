import Logo from "./Logo"

import { SidebarItems } from "./SidebarItems"

const SideBar = () =>{
    return (
        <div className=" flex flex-col justify-between gap-9
         m-4">
            <Logo/>
            <SidebarItems/>
        </div>
    )
}

export default SideBar