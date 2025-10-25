import { useEffect, useState } from "react";
import Buttons from "../components/ui/Buttons";
import { Card } from "../components/ui/Card";
import { ContentModel } from "../components/ui/ContentModel";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import axios from "axios";
import { BackendUrl } from "../config";

function Dashboard() {
  const [content,setContent] = useState([]);
  const [openModel,setOpenModel] = useState(false);
const addContentHandler = ()=>{
  setOpenModel(true);
}
const crossHandler = ()=>{
  setOpenModel(false)
}
async function onShare() {
  const response = await axios.post(`${BackendUrl}/api/v1/brain/share`,{
    share:true
  },{
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
  const shareUrl = `https://localhost:5173/share/${response.data.hash}`
  alert(shareUrl)
}
    async function getContents(){
        const response = await axios.get(`${BackendUrl}/api/v1/content`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        setContent(response.data?.content || [])
    }  
useEffect(()=>{
       getContents()
       let refresh = setInterval(() => {
         getContents()
       }, 5000);
       return (
        clearInterval(refresh)
       )
    },[])
  return (
    <div>
    <Sidebar/>
    <div className="p-2 ml-60 bg-gray-200 min-h-screen">
      <div className="flex justify-end gap-4">
        <Buttons
        startIcon={<PlusIcon size={"md"} />}
        text="Add Content"
        size="md"
        variant="primary"
        onClick={addContentHandler}
      />
      <Buttons
        startIcon={<ShareIcon size={"md"} />}
        text="Share Brain"
        size="lg"
        variant="secondary"
        onClick={onShare}
      /> 
      </div>
      <div className="flex flex-wrap gap-3 p-3">
        {content.map((item:any)=>(
          <Card type={item.type} link ={item.link} title = {item.title} key={item._id} id = {item._id} getContents={getContents} />)
        )}
      </div>
      <ContentModel open={openModel} onClose={crossHandler} getContents={getContents}/>
    </div>
    </div>
  );
}

export default Dashboard;
