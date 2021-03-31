import React from 'react';


 class Burger extends React.Component {
    smallDeviceMenuToggler = () : void => {
        document.getElementById("navbar-menu-toggler")?.classList.toggle("is-active");
    }; 
    render(){
        return  <div className="navbar-burger" onClick={this.smallDeviceMenuToggler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    };
};

export default Burger; 