import React, { useEffect, useState } from 'react'; 
import { availability } from '../listings/ListingCard';
import { transformTime } from './transformTime';

interface props {
    times: availability
    selectedDay: string;
    setTime : (time : string) => void; 
}

export default function Time(props: props) {
    
    const [times, setTimes] = useState([]);
    const [time, setTime] = useState(""); 

    useEffect(()=>{
        for(let day in props.times){
            if (day === props.selectedDay){
               let a : number[][] = props.times[day].available; 
               setTimes(a as any);
            }
        }
    },[props.times, props.selectedDay]);

    const selectHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        setTime(e.currentTarget.value as any); 
        props.setTime(e.currentTarget.value as any); 
    };

    const displayTimes = transformTime(times as [], "military");
    
    const displayTime = (slot :any) => {
        if (slot[0] >= 12){
            return `${slot[0] % 12}PM to ${slot[1] % 12}PM`

        } else {
            return `${slot[0]}AM to ${slot[1]}AM`
        }
    }; 

    return <select value={time} onChange={selectHandler}>
            <option value="base"> select Day</option>

            { 
                displayTimes.map((time)=>{
                    return <option key={Math.random()} value={displayTime(time)}>{displayTime(time)}</option>
                })
                
            }
        </select>
};