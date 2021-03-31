import { ReactElement } from "react";

interface daybtnProp{
    day: string; 
    setDaysAvailable: (day : string) => void; 
    stylingClass: string; 
}

export default function DayButton(props : daybtnProp): ReactElement | null{
    const {setDaysAvailable} = props; 
    return (
        <div className="control">
            <button className={props.stylingClass + " is-capitalized"} onClick={()=> {setDaysAvailable(props.day)}}>
                {props.day}
            </button>
        </div>
      
    )   
}