import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import Buttons from "./Buttons";
import { Input } from "./Input";
import { BackendUrl } from "../../config";
import axios from "axios";

enum ContentType {
    Youtube="youtube",
    Twitter ="twitter"
  }
export function ContentModel({ open, onClose,getContents}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type,setType] = useState(ContentType.Youtube)

  async function onAddContent(){
    const title = titleRef.current?.value
    const link = linkRef.current?.value
    const newContent = {title,link,type}
     await axios.post(`${BackendUrl}/api/v1/content`,
      newContent,{
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    })
    onClose()
    getContents()
  }
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 fixed ">
            <h2 className="text-xl font-semibold mb-4">Add New Content</h2>
            <div className=" text-black absolute top-1 right-1 hover:text-gray-600 hover:bg-gray-400 rounded-full cursor-pointer" onClick={onClose}>
              <CrossIcon size={"md"} />
            </div>
            <div>
              <Input placeholder={"title"} ref ={titleRef} />
              <Input placeholder={"link"} ref = {linkRef}/>
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              <Buttons text ={"Youtube"} variant={type===ContentType.Youtube? "primary":"secondary"} onClick={()=>{ setType(ContentType.Youtube) }} size="md" />
              <Buttons text ={"Twitter"} variant={type===ContentType.Twitter? "primary":"secondary"} onClick={()=>{ setType(ContentType.Twitter) }} size="md" />
            </div>
            <div className="flex justify-center mt-2">
              <Buttons
                variant="primary"
                text="Add Content"
                size="sm"
                onClick={onAddContent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

