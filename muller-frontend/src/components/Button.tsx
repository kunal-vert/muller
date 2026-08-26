
type Variants = "primary" | "secondary"

export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any; //optinal
  endIcon?: any;//optional
  onClick: () => void;
}
const sizeStyles = {
  "sm": "p-2 text-sm",
  "md": "p-4 text-md",
  "lg": "p-5 text-2xl"
}

const flexStyles = "flex items-center "

const defaultStyles = "rounded-2xl "

const ColorVariant = {
  "primary": "bg-purple-600  text-gray-400",
  "secondary": "bg-purple-500  text-purple-600"
}

export const Button = ({variant, size, text, startIcon, endIcon, onClick}: ButtonProps) => {
  return <button className={`${ColorVariant[variant]} ${defaultStyles} ${sizeStyles[size]} ${flexStyles} `}  >{startIcon ? <div className="pr-2">{startIcon}</div> : null} {text} {endIcon}</button>
}


