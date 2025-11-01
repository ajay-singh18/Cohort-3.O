export default async function Todo({params}:any){
    const todoId = (await params).todoId // params is a promise so we have to await it
    return <div>
        {JSON.stringify(todoId) }
    </div>
} 