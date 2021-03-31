import React from 'react'; 
import Button from './Button'; 
import Login from '../../general/Login'; 
import Register from '../../general/Register'; 

interface BtnContainerProps{
    userLoggedIn: boolean;
    updateUser: (action: string) => void; 
}

interface stateInterface {
    login : boolean;
    register : boolean; 
}
 class ButtonContainer extends React.Component<BtnContainerProps, stateInterface>{
    constructor(props : BtnContainerProps){
        super(props); 
        this.state = {
            login : false,
            register : false
        }
        this.toggleAuthLogin = this.toggleAuthLogin.bind(this); 
        this.toggleAuthRegister = this.toggleAuthRegister.bind(this); 
    }
    toggleAuthLogin() : void {
        this.setState({login: !this.state.login, register: this.state.register})
    };

    toggleAuthRegister() : void {
        this.setState({login : this.state.login, register: !this.state.register})
    };

    render(){
        return <div className="navbar-end">
            <div className="navbar-item">
                    {
                        this.props.userLoggedIn ? 
                        <div className="buttons">
                        <Button name="Sign Out" isLight isStrong clickHandler={()=> {this.props.updateUser("out")}}/> 
                        </div> :
                        <div className="buttons">
                        <Button name="Sign Up" isPrimary isStrong clickHandler={this.toggleAuthRegister}/>
                        <Button name="Login" isLight clickHandler={this.toggleAuthLogin}/>
                        </div>  
                    }
                <Login className={this.state.login ? "modal is-active" : "modal"} closeModal={this.toggleAuthLogin} updateUser={this.props.updateUser}/>
                <Register className={this.state.register ? "modal is-active" : "modal"} closeModal={this.toggleAuthRegister} updateUser={this.props.updateUser}/>
            </div>
        </div>
    }
}; 


export default ButtonContainer; 