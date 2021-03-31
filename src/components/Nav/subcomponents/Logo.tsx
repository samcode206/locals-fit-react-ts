import React from 'react';
import logo from '../../general/logo.png';

export default class Logo extends React.Component {
    render(){
        return  <img src={logo} alt="logo" style={{width:"100px", height: "70px"}}/>
    };
};
