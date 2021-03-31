import React from "react";


export default class NavItemContainer extends React.Component {
    render(){
        return <div className="navbar-start">
            {this.props.children}
        </div>
    }
}; 