
interface InputArg {
  placeholder: string;
  ref: any
}

export function InputBox({ placeholder, ref }: InputArg) {
  return (
    <div>
      <input ref={ref} placeholder={placeholder} type={"text"} className=" w-full py-2 px-3
       bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none  focus:border-purple-500 transition-colors " ></input>
    </div>
  )
}