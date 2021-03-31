import React from 'react'; 
import {availability} from '../listings/ListingCard';
import Time from './Time'; 


interface props{
    times: availability
    selectDay: (day : string) => void; 
    setTime : (time : string) => void; 
}

interface state {
    selectValue : string; 
    
}

export default class Select extends React.Component<props, state> {
    constructor(props: props){
        super(props);
        this.state = {selectValue: "base"}
        this.selectHandler = this.selectHandler.bind(this);
    }

    renderAvailableDays(){
        const days = []; 
        for (const day in this.props.times){
            days.push(day);
        }
        return days; 
    }

    selectHandler(e: React.FormEvent<HTMLSelectElement>) : void {
        this.setState({selectValue: e.currentTarget.value});
        this.props.selectDay(this.state.selectValue); 
    }

    render(){
        console.log(this.props.times)
        return  (
            <div>
        <div className="field is-grouped is-grouped-centered">
            <div className="select is-rounded">

            <select value={this.state.selectValue} onChange={this.selectHandler}>
            <option value="base"> select Day</option>
              {
                  this.renderAvailableDays().map((day, index)=>
                   <option value={day} key={index} >{day}</option>)
              }
            </select>
            </div>
            
        </div>
        <div className="field is-grouped is-grouped-centered">
     
            {
           this.state.selectValue !== "base" &&  <div className="select is-rounded" style={{marginBottom: "20px"}}>
               <h2 className="has-text-centered label">Time</h2>
                 <Time selectedDay={this.state.selectValue} times={this.props.times} setTime={this.props.setTime}/>
                    </div>
            }

        </div>
        </div>
)
    }
}