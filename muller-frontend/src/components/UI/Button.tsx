
export interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any; //optinal
    endIcon? : any;//optional
    onClick: () => void;
}


export const Button = (props: ButtonProps) =>{
  return <button>

  </button>
}

<Button variant="primary" size="md" onClick={() => {}} text={"fjhg"} startIcon={".-."} endIcon={"+"}/>
