import axios from "axios";
import ShareIcon from "../../icons/ShareIcon";
import { MdDelete } from "react-icons/md";
import { BackendUrl } from "../../config";
interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
  key: string;
  id: string;
  getContents: ()=>void
}

export function Card({ title, type, link, id,getContents }: CardProps) {
  async function onDelete(id:string){
    console.log(id);

    const response = await axios.delete(BackendUrl+"/api/v1/delete/"+ id,{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
    if(response.data){
      getContents()
    }
    
    
    

  }
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md max-w-72 p-3 min-h-48 min-w-60 ">
      <div className="flex justify-between">
        <div className="flex text-gray-500 gap-2 items-center">
          <ShareIcon size={"md"} />
          <p className="text-black">{title}</p>
        </div>
        <div className="flex text-gray-500 gap-1 items-center">
          <a href={link} target="_blank">
            <ShareIcon size={"md"} />
          </a>
          <div className="text-2xl" onClick={()=>onDelete(id)}>
            <MdDelete />
          </div>
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src= {link.replace("watch?v=","embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com","twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
