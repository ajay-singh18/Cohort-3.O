import axios from "axios";


async function getBlogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/2")
    return response.data
}
export default async function Blogs(){
    const blogs = await getBlogs();
    return  (
        JSON.stringify(blogs)
    )

}
function Todos(){
    
}
interface ITodo{
    title: string,
    done: boolean
}