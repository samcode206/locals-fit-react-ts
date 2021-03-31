import react  from "react";
import {Link} from 'react-router-dom'; 

interface NavLinkProps {
    to : string;
    name : string;
}

export default class NavLink extends react.Component<NavLinkProps> {
    render(){
        return  <div className="navbar-item">
        <Link to={this.props.to} className="has-text-dark">{this.props.name}</Link>
        </div>
    }
}