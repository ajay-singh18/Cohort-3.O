import { useRef } from "react";
import Buttons from "../components/ui/Buttons";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BackendUrl } from "../config";

export function Signup(){
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function onSignup(){
        const username= nameRef.current?.value
        const password = passwordRef.current?.value
        const res = await axios.post(`${BackendUrl}/api/v1/signup`,{
                username,
                password
        })
        console.log(res.data);
        
        alert("You have signed up")
    }
    return (
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-5 flex-col gap-10 rounded-2xl shadow-2xl">
                <Input placeholder="Enter UserName" ref ={nameRef}/>
                <Input placeholder="Enter Password" ref={passwordRef}/>
                <br />
                <Buttons size="md" text="Signup" variant="primary" onClick={onSignup} fullWidth={true} />

            </div>
        </div>
    )
}