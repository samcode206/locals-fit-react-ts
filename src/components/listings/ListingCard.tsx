import { ReactElement, useState } from 'react'; 
import Listing from '../listing/Listing'; 

interface day{
    available: number[]
    booked: number[]
}
export interface availability {
        [key : string] : any; 
        monday? : day
        tuesday?: day
        wednesday?: day
        thursday?: day
        friday?:day
        saturday?:day
        sunday?:day
}

interface propsInterface {
    createdBy : string; 
    description: string; 
    rating: number; 
    ratingCollection: number[]; 
    title: string; 
    pricePerHour: number; 
    id: string; 
    isOwnUser?: boolean; 
    deleteHandler: (id: string) => void; 
    availability: availability
}; 

export default function ListingCard(props: propsInterface) : ReactElement | null {
    const [showBooking, setShowBooking] = useState("modal"); 

    const {
        title,
        description,
    } = props; 

    let rate = (Math.random() * 1.5) + 3.5;

    const bookHandler = () : void => {
        setShowBooking("modal is-active"); 
    }; 

    const closeModal = () : void => {
        setShowBooking("modal"); 
    }

    return <div className="box">
        <h1 className="title is-4 has-text-centered is-capitalized">{title}</h1>
        <p className="is-size-5 has-text-centered is-size-5-mobile">{description}</p>
        <div style={{display:"flex", marginLeft: "42%", marginTop: "1%"}}>

        <progress className="progress is-warning" value={Math.floor(rate * 20)} 
        max="100" style={{width: "25%"}}>{Math.floor(rate * 20)}
        </progress>
        {
            rate === -1 ? <p style={{marginLeft: "5px"}}> please rate us!</p> : 
            <p style={{marginLeft:"5px"}}>{rate.toFixed(1)} / 5</p>
        } 
        </div>
        
        <div className="field is-grouped is-grouped-centered">
            <button className="button" onClick={bookHandler}>Book</button>
            {
                props.isOwnUser && <button style={{marginLeft: "10px"}} className="button is-danger" onClick={()=>{props.deleteHandler(props.id)}}>delete</button>
            }
            
            <Listing modalClassName={showBooking} closeModal={()=>{closeModal()}} title={title} fee={props.pricePerHour} availability={props.availability}/>
            
        </div>
     
    </div>
};

