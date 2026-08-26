import { SIDEBAR_ITEMS } from "../../Icons/SideBarIcons"

export const SidebarItems = () => {
    return (
        <div className="flex flex-col gap-2">
            {SIDEBAR_ITEMS.map((item) => (

                <div
                    key={item.name}
                    className="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div className="text-base font-semibold">
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    )
}