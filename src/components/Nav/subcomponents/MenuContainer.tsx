import React from 'react'; 


export default class MenuContainer extends React.Component {
    render(){
        return <div id="navbar-menu-toggler" className="navbar-menu">
            {this.props.children}
        </div>
    }
}; 