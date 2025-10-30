"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"
import { useState } from "react"

export default function Signup(){
     const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const router = useRouter()
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input type="text" placeholder="username" onChange={e=>{setUsername(e.target.value)}} />
                <input type="password" placeholder="password" onChange={(e)=> {setPassword(e.target.value)}} />
                <button onClick={async ()=>{
                     await axios.post("http://localhost:3000/api1/v1/signup",{
                        username: username,
                        password: password
                     })
                     router.push("/signin")
                }}>Signup</button>
            </div>
        </div>
    )
}