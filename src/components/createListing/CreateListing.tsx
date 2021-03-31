import {ChangeEvent, Component} from 'react'; 
import {generalStyle} from './stateless/generalStyle'; 
import base from '../../Base'; 
import Days from './subcomponents/Days'; 
import Field from './subcomponents/Field';


interface propsInterface {
    user: string | null;
    token: string | null; 
};
interface stateInterface {
    title: string; 
    createdBy : string; 
    description: string; 
    fee: number; 
    daysAvailable: string[];
    error: boolean; 
};

class CreateListing extends Component<propsInterface, stateInterface>{

    constructor(props : propsInterface){
        super(props);

        this.state = {
            title: "",
            createdBy : "",
            description: "",
            fee: 0,
            daysAvailable : [],
            error: false
        }
        this.setDaysAvailable = this.setDaysAvailable.bind(this); 
        this.onChangeHandler = this.onChangeHandler.bind(this); 
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    setDaysAvailable(day: string) : void {
        if(this.state.daysAvailable.indexOf(day) === -1) {
           let current = [...this.state.daysAvailable];
           current.push(day);
           this.setState({...this.state, daysAvailable : current});
        } else {
            let currentDays = [...this.state.daysAvailable]; 
            currentDays.splice(currentDays.indexOf(day), 1);
            this.setState({...this.state, daysAvailable : currentDays});
        }
    }

    onChangeHandler(e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) : void {
        switch(e.target.id){
            case "Listing Description": 
            this.setState({...this.state, description : e.target.value});
            break; 

            case "Fee":
                this.setState({...this.state, fee : parseInt(e.target.value)});
            break; 

            default:
                this.setState({...this.state, title : e.target.value});
                break; 
        }
    }

     onSubmitHandler() {
            base.post("/business", {
                title : this.state.title,
                createdBy: this.props.user,
                description : this.state.description,
                pricePerHour: this.state.fee,
                availbillity: this.state.daysAvailable
            }, {
                headers: {
                    Authorization : this.props.token
                }
            })
            .then(res => {
                if (res.status === 200){
                    window.location.href = window.location.origin + "/listings"
                }
            })
            .catch(() => {
                this.setState({...this.state, error: true}); 
            }); 
    }

    render(){
        return <div style={generalStyle}>
            <div className="card">
            <h2 className="has-text-centered title is-4 is-family-monospace">
                Create A Listing 
                </h2>
              
                   <div className="card-content">
                       { this.state.error && <h2 className="has-text-centered has-text-danger">there was an issue saving your new listing please try again later!</h2>}
                            {
                                this.props.user?.length && this.props.token?.length ? 
                                <>
                                <Field label="Title" placeholder="Listing Title" onChangeHandler={this.onChangeHandler}  type={"text"}/>
                                <Field label="Listing Description" placeholder="please describe your listing" isArea onChangeHandler={this.onChangeHandler} type={"text"}/>
                                <Field label="Fee" placeholder="Rate Per Hour" onChangeHandler={this.onChangeHandler}  type={"number"}/>
                                </> :
                                <>
                                <h1 className="has-text-centered has-text-danger">you must log in or register to create a listing!</h1>
                                <Field label="Title" placeholder="Listing Title" onChangeHandler={this.onChangeHandler} disabled type={"text"}/>
                                <Field label="Listing Description" placeholder="please describe your listing" isArea disabled onChangeHandler={this.onChangeHandler} type={"text"}/>
                                <Field label="Fee" placeholder="Rate Per Hour" onChangeHandler={this.onChangeHandler} disabled type={"number"}/>
                                </>
                            }
                 

                         <label className="label"> Available Days</label>

                            <div className="field is-grouped is-grouped-multiline" style={{margin: "auto"}}>
                                {
                                    <Days setDaysAvailable={this.setDaysAvailable} daysSelected={this.state.daysAvailable}/>
                                }
                            </div>
                    
                                <div className="field is-grouped is-grouped-centered">
                                <div className="control">
                                {
                                    this.state.title.length && this.state.description.length > 0 && this.state.fee > 0 && this.state.daysAvailable.length ? 
                                    <button className="button is-success is-large" onClick={this.onSubmitHandler}>
                                    Submit
                                    </button> :
                                       <button className="button is-success is-large" disabled >
                                       Submit
                                       </button>
                                }


                                </div>
                                </div>
                   </div>

            </div>
        </div>
    }
}; 



export default CreateListing;