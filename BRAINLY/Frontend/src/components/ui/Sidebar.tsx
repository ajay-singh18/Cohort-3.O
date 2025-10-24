import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar(){
    return (
        <div className="bg-white min-w-72 fixed border-r border-2 border-gray-200 shadow min-h-screen">
            <div className="mt-4">
            <SidebarItems text={"Twitter"} icon = {<TwitterIcon/>} />
            <SidebarItems text={"Youtube"} icon ={<YoutubeIcon/>} />

            </div>
        </div>
    )
}