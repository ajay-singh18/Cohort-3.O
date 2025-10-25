import axios from "axios";
import Buttons from "../components/ui/Buttons";
import { Input } from "../components/ui/Input";
import { BackendUrl } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export function Signin(){
    const navigate = useNavigate()
     const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function onSignin(){
        const username= nameRef.current?.value
        const password = passwordRef.current?.value
        const response = await axios.post(`${BackendUrl}/api/v1/signin`,{
                username,
                password
        })
        const token = response.data.token
        localStorage.setItem("token",token)
        navigate("/dashboard")
    }
    return (
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-5 flex-col gap-10 rounded-2xl shadow-2xl">
                <Input placeholder="Enter UserName" ref ={nameRef} />
                <Input placeholder="Enter Password" ref={passwordRef} />
                <br />
                <Buttons size="md" text="Signin" variant="primary" onClick={onSignin} fullWidth={true} />

            </div>
        </div>
    )
}