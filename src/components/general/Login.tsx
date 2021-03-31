import react from 'react'; 
import { ChangeEvent } from "react";
import Modal from './Modal';
import Field from '../createListing/subcomponents/Field'; 
import base from '../../Base';

interface authInterface {
    className : string;
    closeModal : () => void;
    updateUser: (action: string) => void; 
}

interface loginState { 
    Email : string; 
    Password : string; 
    invalid: boolean; 
    error: boolean; 
}

export default class Login extends react.Component<authInterface, loginState> {

    constructor(props : authInterface){
        super(props);
        this.state = {Email :"" , Password : "", invalid : false, error: false}; 
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this); 
    }

    onChangeHandler(e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) : void{
        switch(e.target.id){
            case "Password": 
            this.setState({...this.state, Password: e.target.value});
                break; 

            default: 
            this.setState({...this.state, Email: e.target.value}); 
                break; 
        }
    }; 

    onSubmitHandler(){
        base.post("/entry/login", {
            email: this.state.Email,
            password: this.state.Password
        })
        .then(res => {
            this.setState({ ...this.state,invalid: false, error : false})
            const token = res.data.token;
            const user = res.data.email; 
            const send = token + "|<||tokenStartingPoint||>|" + user; 
            this.props.updateUser(send);
            this.props.closeModal();  
            window.location.reload();       
        })
        .catch((err : Error) => {
            if (err.message === "Request failed with status code 401"){
                this.setState({...this.state, invalid: true})
            } else {
                this.setState({...this.state, error : true})
            }
        })
    }

    render(){
        return <Modal modalClassName={this.props.className} closeModal={this.props.closeModal}>
        <div className="card-content">
            {this.state.error &&  <h2 className="has-text-centered has-text-danger">there was a server issue please try again!</h2>}
            {this.state.invalid && <h2 className="has-text-centered has-text-danger">Password/Email combination is not correct!</h2>}
            <Field label="Email" placeholder="username" type="input" onChangeHandler={this.onChangeHandler}/>
            <Field label="Password" placeholder="Enter Password" type="password" onChangeHandler={this.onChangeHandler}/>

            <div className="field is-grouped is-grouped-centered">
            {
                this.state.Email && this.state.Password.length ? 
                <button className="button is-info is-rounded" onClick={this.onSubmitHandler}>Submit</button> :
                <button className="button is-info is-rounded" disabled>Submit</button>
            }
            </div>
        </div>
    </Modal>
    }
}