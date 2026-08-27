export function InputBox({ onChange, placeholder }: { onChange: () => void, placeholder: string }) {
  return (
    <div>
      <input placeholder={placeholder} type={"text"} className=" w-full py-2 px-4 
      text-center bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none  focus:border-purple-500 transition-colors " onChange={onChange}></input>
    </div>
  )
}