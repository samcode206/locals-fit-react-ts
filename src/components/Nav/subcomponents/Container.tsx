import React from 'react'; 


class Container extends React.Component {
    render(){
        return <nav className="navbar is-transparent" style={{maxWidth:"97%" , margin: "auto"}}>
            {this.props.children}
        </nav>
    }
}; 


export default Container; 