import react, {ChangeEvent} from 'react'; 
import Modal from './Modal';
import Field from '../createListing/subcomponents/Field';
import base from '../../Base';

interface authInterface {
    className : string;
    closeModal : () => void;
    updateUser: (action: string) => void; 
}

interface registerState {
    Email : string;
    Password: string;
    ConfirmPassword: string;
}

export default class Register extends react.Component<authInterface, registerState> {
    constructor(props : authInterface){
        super(props);
        this.state = {Email :"" , Password : "", ConfirmPassword: ""}; 

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this); 
    }
    
    onChangeHandler(e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) : void{
        switch(e.target.id){
            case "Password": 
            this.setState({...this.state, Password: e.target.value});
                break; 
            
            case "Confirm Password":
                this.setState({...this.state, ConfirmPassword: e.target.value})
                break;
            default: 
            this.setState({...this.state, Email: e.target.value}); 
                break; 
        }
    }; 

    onSubmitHandler(){
        base.post("/entry/register", {
            email: this.state.Email,
            password: this.state.Password
        })
        .then(res => {
            const token = res.data.token;
            const user = res.data.user.email; 
            const send = token + "|<||tokenStartingPoint||>|" + user; 
            this.props.updateUser(send);
            this.props.closeModal();            
        })
        .catch(err => {
            console.log(err); 
        })
    }

    validateEmail(email : string) : boolean {
        // eslint-disable-next-line
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(String(email).toLowerCase());
    }
    render(){
        return <Modal modalClassName={this.props.className} closeModal={this.props.closeModal}>
        <div className="card-content">
            <Field label="Email" placeholder="username" type="input" onChangeHandler={this.onChangeHandler}/>
            <Field label="Password" placeholder="Enter Password" type="password" onChangeHandler={this.onChangeHandler}/>
            <Field label="Confirm Password" placeholder="Please Confirm Password" type="password" onChangeHandler={this.onChangeHandler}/>

            <div className="field is-grouped is-grouped-centered">
                
            {
                this.validateEmail(this.state.Email) && this.state.Password.length > 2
                && this.state.ConfirmPassword === this.state.Password ? 
                <button className="button is-info is-rounded" onClick={this.onSubmitHandler}>Submit</button> :
                <button className="button is-info is-rounded" disabled>Submit</button>
            }

            </div>
        </div>
    </Modal>
    }
}