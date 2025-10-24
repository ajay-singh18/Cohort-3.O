import CrossIcon from "../../icons/CrossIcon";
import Buttons from "./Buttons";

export function ContentModel({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 fixed ">
            <h2 className="text-xl font-semibold mb-4">Add New Content</h2>
            <div className=" text-black absolute top-1 right-1 hover:text-gray-600 hover:bg-gray-400 rounded-full cursor-pointer" onClick={onClose}>
              <CrossIcon size={"md"} />
            </div>
            <div>
              <Input placeholder={"title"} onChange={() => {}} />
              <Input placeholder={"link"} onChange={() => {}} />
            </div>
            <div className="flex justify-center mt-2">
              <Buttons
                variant="primary"
                text="Submit"
                size="sm"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }) {
  return (
    <div>
      <input
        className="px-4 py-2 mr-4 mt-2 border rounded w-full"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
