import Logo from "./Logo"

import { SidebarItems } from "./SidebarItems"

interface SideBarProps {
  functionButton: (value: boolean) => void;
}

const SideBar = ({ functionButton }: SideBarProps) =>{
    return (
        <div className=" flex flex-col gap-8 
         m-4  ">
            <Logo/>
            <SidebarItems/>
        </div>
    )
}

export default SideBar