import { ReactElement, useState , ChangeEvent} from "react";
import Modal from '../general/Modal'; 
import {availability} from '../listings/ListingCard'
import Field from '../createListing/subcomponents/Field';
import Select from './Select'; 

const days = <div>
<h2 className="has-text-centered label">day</h2>
</div>;

interface ListingProps{
    modalClassName: string;
    closeModal : () => void;
    title: string;
    fee: number; 
    availability: availability
}


function Listing (props : ListingProps) : ReactElement | null{
    const {title , fee , availability} = props; 

    const [total] = useState(fee); 
    const [selectedDay, setSelectedDay] = useState(""); 
    const [time, setTime] = useState(""); 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 

    const selectDay = (day : string) => {
        setSelectedDay(day); 
    }; 

    const selectTime = (time : string) => {
        setTime(time); 
    }; 

    const changeHandler = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.id === "name"){
            setName(e.target.value);
        }else {
            setEmail(e.target.value); 
        }
    }; 


    console.log(name , email)
    return <Modal closeModal={props.closeModal} modalClassName={props.modalClassName}>
    <div className="card">
            <h2 className="title is-4 has-text-centered">{title}</h2>

            <div style={{maxWidth: "95%", margin: "auto"}}>
            <Field label="name" placeholder="enter full name" onChangeHandler={changeHandler} type="text"/>
            <Field label="email" placeholder="please enter your email" onChangeHandler={changeHandler} type="email"/>

            {days}

            <Select times={availability}  selectDay={selectDay} setTime={selectTime}/> 
            </div>
       

            <hr/>
            <h2 style={{maxWidth: "95%", margin: "auto", marginBottom:"10px"}} className="title is-4">Total: ${ " " + total}</h2>
            <div className="field is-grouped is-grouped-centered">

                {
                    time.length && name.length
                     && validateEmail(email) === true
                     && selectedDay.length ?  
                     <button className="button is-info" style={{marginBottom: "15px"}} onClick={()=>{
                         props.closeModal()
                     }}>Submit</button> 
                    : <button className="button is-info" disabled style={{marginBottom: "15px"}} >Submit</button> 
                }
       
            </div>
    </div>

    </Modal>
}; 

export default Listing; 


function validateEmail(email : string) : boolean {
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(String(email).toLowerCase());
}