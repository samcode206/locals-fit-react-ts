import {ReactElement} from 'react'; 
import DayButton from './DayButton';

interface daysProps{ 
    setDaysAvailable: (day : string) => void; 
    daysSelected : string[]; 
}; 

export default function Days (props:daysProps) : ReactElement | null {
    
    return  (
    <div className="field is-grouped is-grouped-multiline" style={{margin: "auto"}}>
     {
     ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] 
     .map((day, index) => {
        return <DayButton day={day} key={index} 
                          setDaysAvailable={props.setDaysAvailable} 
                          stylingClass={props.daysSelected.indexOf(day) > -1 ? "button is-info" : "button"}/>
     })
     }     
   
    </div>
    ); 
}