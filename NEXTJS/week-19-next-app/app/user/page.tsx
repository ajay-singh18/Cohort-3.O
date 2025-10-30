import axios from "axios"

export default async function User(){

    const response = await axios.get("http://localhost:3000/api/v1/user/details")
    const data = response.data
    return <div className="text-3xl font-bold text-center pt-10 bg-blue-400 h-screen justify-center items-center flex flex-col p-10 rounded-lg ">
        Here is the user page 
        
        {data.user}
        {data.email}
        </div>
}