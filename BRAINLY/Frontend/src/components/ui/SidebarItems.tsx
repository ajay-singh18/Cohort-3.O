import type { ReactElement } from "react";

export function SidebarItems({icon,text}:{icon:ReactElement,text:string}){
        return (
            <div className="flex text-gray-500 gap-1 items-center cursor-pointer hover:bg-gray-200 pl-4 max-w-48 transition-all duration-400">
                <div>
                    {icon}
                </div>
                <div>
                    {text}
                </div>
            </div>
        )
}