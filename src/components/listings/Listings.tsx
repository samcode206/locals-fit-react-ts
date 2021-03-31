import {Component} from 'react'; 
import base from '../../Base'; 
import ListingCard from './ListingCard'; 
import style from './ListingsContainerStyles';
import {availability} from './ListingCard'

interface props{
    user: string | null;
}

interface stateInterface {
    listings:
        {
        title: string,
        description: string,
        rating: number,
        ratingCollection: number[],
        pricePerHour: number, 
        _id : string ,
        availability: availability
        createdBy: string
        }[];

    error : boolean;
}

class Listings extends Component<props, stateInterface>{
    constructor(props: props){
        super(props);
        this.state = {
            listings: [],
            error: false
        }
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    componentDidMount(){
        base.get("/business")
        .then((res)=> {
            this.setState({...this.state, listings : res.data, error: false});
        })
        .catch((err)=> {
            this.setState({...this.state, error: true}); 
        })
    }

    deleteHandler(id: string){
        base.delete(`/business/${id}`)
        .then((res)=> {
            const newListings = this.state.listings.filter(listing => listing._id !== id )
            this.setState({...this.state, listings: newListings});
        })
        .catch((err)=>{
            console.log(err); 
        })
    }
    
    render(){

        return <div style={style}>
            {
               !this.state.error ? this.state.listings.map((listing, index) => {
                    const {title, description, rating, ratingCollection, createdBy} = listing; 
                    const id = listing._id; 
                    if(this.props.user === createdBy){
                        return <ListingCard
                        pricePerHour={60}
                        key={id} 
                        id={id}
                        isOwnUser
                        deleteHandler={this.deleteHandler}
                        createdBy={createdBy}
                        title={title} 
                        description={description}
                        rating={rating}
                        ratingCollection={ratingCollection}
                        availability={listing.availability}/>
                    } 
                    else {
                        return <ListingCard
                        pricePerHour={60}
                        key={id} 
                        id={id}
                        deleteHandler={this.deleteHandler}
                        createdBy={createdBy}
                        title={title} 
                        description={description}
                        rating={rating}
                        ratingCollection={ratingCollection}
                        availability={listing.availability}/>
                    }                   
                    }
                   )
                :
                <div>Something went wrong please try again</div>
            }
        </div>
    }
}; 

export default Listings; 