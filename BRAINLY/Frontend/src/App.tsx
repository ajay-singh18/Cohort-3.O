import { useState } from "react";
import Buttons from "./components/ui/Buttons";
import { Card } from "./components/ui/Card";
import { ContentModel } from "./components/ui/ContentModel";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import { Sidebar } from "./components/ui/Sidebar";

function App() {
  const [openModel,setOpenModel] = useState(false);
const addContentHandler = ()=>{
  setOpenModel(true);
}
const crossHandler = ()=>{
  setOpenModel(false)
}
  return (
    <div>
    <Sidebar/>
    <div className="p-4 ml-72 bg-gray-200 min-h-screen">
      <div className="flex justify-end gap-4">
        <Buttons
        startIcon={<PlusIcon size={"md"} />}
        text="Add Content"
        size="md"
        variant="primary"
        onClick={addContentHandler}
      />
      <Buttons
        startIcon={<ShareIcon size={"md"} />}
        text="Share Brain"
        size="lg"
        variant="secondary"
        onClick={() => {}}
      /> 
      </div>
      <div className="flex gap-2">
        <Card
          type="twitter"
          link="https://twitter.com/26Abhishekyadav/status/1981283963680542891"
          title="twitter"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=OEuiB_7iPl4"
          title="IndvsAus"
        />
      </div>
      <ContentModel open={openModel} onClose={crossHandler} />
    </div>
    </div>
  );
}

export default App;
