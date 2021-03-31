import react from 'react'; 
import Navigation from './components/Nav/Navigation'; 
import Home from './components/home/Home';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Listings from './components/listings/Listings';
import CreateListing from './components/createListing/CreateListing'; 

interface appProps{}

interface appState{
    user: string | null; 
    token: string | null;
}

class App extends react.Component<appProps, appState> {
    constructor(props: appProps){
        super(props);
        this.state = {
            user: "", 
            token: ""
        }
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        let token = localStorage.getItem("token");
        let user = localStorage.getItem("user"); 
        if (token?.length && user?.length){
            this.setState({user, token}); 
        }
    }

    updateUser(action : string){
        switch(action){
            case "out": 
                this.setState({user: "", token: ""});
                localStorage.removeItem("token");
                localStorage.removeItem("user"); 
                break; 
            default: 
                const [token, user] = action.split("|<||tokenStartingPoint||>|");
                this.setState({user, token}); 
                localStorage.setItem("token", token);
                localStorage.setItem("user", user); 
                break;
        }
    }

    render(){
        return <div>
        <BrowserRouter>
            <Navigation user={this.state.user} token={this.state.token} updateUser={this.updateUser}/>

            <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/listings">
                <Listings user={this.state.user}/>
            </Route>


            <Route path="/create">
                <CreateListing user={this.state.user} token={this.state.token} />
            </Route>

            </Switch>

            </BrowserRouter>
            </div>;
    }

}

export default App; 