import React, {Component} from 'react';
import StarshipsList from "../starships-list";
import StarshipDetails from "../starship-details";

class Starship extends Component{
    state ={
        selectedStarship: 15
    };
    onStarshipSelected=(id)=>{
        this.setState({selectedStarship:id})
    };
    render (){

        return(
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <StarshipsList onStarshipSelected={this.onStarshipSelected}/>
                    </div>
                    <div className='col-md-6'>
                        <StarshipDetails starshipId={this.state.selectedStarship}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Starship;