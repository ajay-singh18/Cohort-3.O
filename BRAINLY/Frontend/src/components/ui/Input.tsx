export function Input({ ref, placeholder }:{ref?:any,placeholder:string
}) {
  return (
    <div>
      <input
        className="px-4 py-2 mr-4 mt-2 border rounded w-full"
        placeholder={placeholder}
        ref ={ref}
      />
    </div>
  );
}
