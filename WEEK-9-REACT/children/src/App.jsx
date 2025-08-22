
// function App() {

//   return (
//     <div style={{display:"flex",backgroundColor: "gray"}}>
      
//       <Card>
//         <div style={{color:"white"}}> 
//         What do you want to post  <br /> <br />
//          <input type="text" />
//          </div> 
//       </Card>
//       <Card>
//         <div>Hii there</div> 
//       </Card>
//     </div>
//   )
// }
// function Card({children}){
//   return <div style={{backgroundColor:"pink",borderRadius:10, color:"white", padding:10, margin:10
//   }}>
//     {children}
//     {children}
//   </div>
// }

const App = ()=>{
//   const todos = [{
//     title:"Go to gym",
//     done:false
//   },
//   {
//     title:"Eat food",
//     done: true
//   }
// ]
// creating an array of components
// const todoComponents = todos.map(todo => <Todo title = {"todo.title"} done = {todo.done} />)

 return <div>
       {/* {todoComponents} */}
      {[<Todo key={1} title = {"Go to gym"} done = {false} />,
      <Todo key={2} title = {"Eat food"} done = {true} />]}
 </div>

}
function Todo({title,done}){
  return <div>
    {title} - {done? "Done": "Not done"}
  </div>
}


export default App
