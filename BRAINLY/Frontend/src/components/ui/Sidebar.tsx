import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";
import { FaBrain } from "react-icons/fa";

export function Sidebar(){
    return (
        <div className="bg-white min-w-60 fixed border-r border-2 border-gray-200 shadow min-h-screen">
            <div className="text-2xl pl-4 flex items-center gap-2 pt-4 font-bold font-mono">
                <div className="text-red-400 text-3xl">
                    <FaBrain />
                </div>
                Brainly 

            </div>
            <div className="pt-5 pl-6">
            <SidebarItems text={"Twitter"} icon = {<TwitterIcon/>} />
            <SidebarItems text={"Youtube"} icon ={<YoutubeIcon/>} />

            </div>
        </div>
    )
}