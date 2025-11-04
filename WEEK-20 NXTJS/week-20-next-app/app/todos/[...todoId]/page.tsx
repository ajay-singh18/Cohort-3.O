export default async function Todo({params}:any){
    const todoId = (await params).todoId 
    return <div>
        {JSON.stringify(todoId) } ///
    </div>
} 