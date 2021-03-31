interface BtnProps {
    isPrimary? : boolean;
    isLight? : boolean;
    isStrong? : boolean;
    name: string; 
    clickHandler?: () => void; 
}

 function Button(props: BtnProps) {
    const generateClassName = () : string => {
        if (props.isPrimary){
            return "button is-primary";
        } else if (props.isLight){
            return "button is-light";
        }  
        else {
            return "button"; 
        }
    }
    
    return <button className={generateClassName()} onClick={props.clickHandler} >
                 {props.isStrong ? <strong>{props.name}</strong> : props.name}
            </button>
}
export default Button; 