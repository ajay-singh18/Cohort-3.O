import type { ReactElement } from "react";

export function SidebarItems({icon,text}:{icon:ReactElement,text:string}){
        return (
            <div className="flex text-gray-500">
                <div className="p-2 text-red-500">
                    {icon}
                </div>
                <div className="p-2">
                    {text}
                </div>
            </div>
        )
}