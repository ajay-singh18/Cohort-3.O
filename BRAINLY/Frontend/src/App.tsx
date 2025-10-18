import Buttons from "./components/ui/Buttons"
import PlusIcon from "./icons/PlusIcon"
import ShareIcon from "./icons/ShareIcon"


function App() {

  return (
    <>
      <Buttons startIcon={<PlusIcon size={"md"}/>} endIcon={<ShareIcon size = {"md"} />} text = "Hellu" size = "md" variant="primary" onClick={()=>{}} />
      <Buttons text = "World" size = "lg" variant="secondary" onClick={()=>{}} />
      <Buttons text = "Hulala" size = "sm" variant="primary" onClick={()=>{}} />
    </>
  )
}

export default App
