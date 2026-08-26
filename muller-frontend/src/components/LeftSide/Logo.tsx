import HeaderIcon from "../../Icons/HeaderIcon"


const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer">
      <HeaderIcon/>
      <div className="text-2xl font-medium">Muller</div>
    </div>
  )
}

export default Logo