import axios from "axios";

//Dynamic routes
export default async function Blogs({params}:any){
    const blogId = (await params).blogId;
    console.log(blogId)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${blogId}`)
    const data = response.data
    console.log(data);
    
    return (
        <div>
            blogs {blogId}
            <br />
            {data.title}
            <br />
            {data.id}
        </div> //
    )
}