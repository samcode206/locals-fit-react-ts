import react from 'react'; 

class BrandContainer extends react.Component {
    render(){
       return <div className="navbar-brand">
        {this.props.children}
    </div>
    }
}

export default BrandContainer; 