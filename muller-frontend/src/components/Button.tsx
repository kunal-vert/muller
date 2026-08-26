
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
  "sm": "px-3 py-1.5 text-sm font-medium",
  "md": "px-4 py-2 text-base font-semibold",
  "lg": "px-5 py-3 text-lg font-bold"
}

const flexStyles = "flex items-center justify-center gap-2 "

const defaultStyles = "rounded-2xl transition-all duration-200 ease-in-out active:scale-95 "

const ColorVariant = {
  "primary": "bg-purple-600  text-gray-400",
  "secondary": "bg-purple-500  text-purple-600"
}

export const Button = ({ variant, size, text, startIcon, endIcon, onClick }: ButtonProps) => {
  return <button className={`${ColorVariant[variant]} ${defaultStyles} ${sizeStyles[size]} ${flexStyles} `}  >{startIcon ? <div >{startIcon}</div> : null} {text} {endIcon}</button>
}


