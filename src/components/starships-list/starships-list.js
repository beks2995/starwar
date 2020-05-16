import React,{Component} from 'react';
import './starships-list.css'
import SwapiService from '../../services/'
import Spinner from "../spiner";

class StarshipsList extends Component{
    swapiService = new SwapiService();
    state = {
        starshipsList: null,
    };
    componentDidMount() {
        this.swapiService
            .getAllStarships()
            .then((starshipsList)=>{
                this.setState({starshipsList});
            });
    }

    renderStarships(arr){
        return arr.map((starship)=>{
            const {id}=starship;
            return(
                <li className='list-group-item'
                    onClick={()=>this.props.onStarshipSelected(id)}>
                    {starship.name}
                </li>
            )
        })
    }

    render() {
        const {starshipsList}=this.state;

        if(!starshipsList){
            return <Spinner/>
        }
        const starships = this.renderStarships(starshipsList);
        return (
            <ul className='list-item'>
                {starships}
            </ul>
        )
    }
};
export default StarshipsList;