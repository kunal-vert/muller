
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
  "sm": "p-2 text-xl",
  "md": "p-4 text-2xl",
  "lg": "p-5 text-2xl"
}

const endIcon = "flex items-center gap-2.5"

const defaultStyles = "rounded-2xl  "

const ColorVariant = {
  "primary": "bg-purple-600  text-white",
  "secondary": "bg-purple-400  text-purple-600"
}

export const Button = (props: ButtonProps) => {
  return <button className={`${ColorVariant[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${endIcon} `}  >{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
}


