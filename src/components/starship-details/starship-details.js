import React,{Component} from 'react';
import './starship-details.css';
import SwapiService from "../../services";

class StarshipDetails extends Component{
    swapiService = new SwapiService();
    state = {
        starshipInfo: null
    };
    componentDidMount() {
        this.updateStarship()
    }
    componentDidUpdate(prevProps) {
        if (this.props.starshipId !== prevProps.starshipId){
            this.updateStarship()
        }
    };

    updateStarship(){
        this.swapiService
            .getStarhip(this.props.starshipId)
            .then((starshipInfo)=>{
                this.setState({starshipInfo});
            });
    }
    render() {
        const {starshipInfo} = this.state;
        if(!starshipInfo){
            return <span>Select a starship from a list</span>
        }
        return (
            <div className='person-details'>
                <img src={`https://starwars-visualguide.com/assets/img/starships/${this.props.starshipId}.jpg`} className='person-image' alt=""/>
                <div>
                    <h4>{this.state.starshipInfo.name}</h4>
                    <ul className='list-group list-group-flush'>

                        <li className='list-group-item'>
                            <span className='term'>Модель:</span>
                            <span>{this.state.starshipInfo.model}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Производитель:</span>
                            <span>{this.state.starshipInfo.manufacturer}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Стоимость корабля:</span>
                            <span>{this.state.starshipInfo.constInCredits} друггаты</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Длинна корабля:</span>
                            <span>{this.state.starshipInfo.length} м</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Экипаж:</span>
                            <span>{this.state.starshipInfo.crew} чел</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Вместимость пассажиров:</span>
                            <span>{this.state.starshipInfo.passengers} чел</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Грузоподъемность:</span>
                            <span>{this.state.starshipInfo.cargoCapacity} кг</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Фильмы с участием корабля:</span>
                            <span>{this.state.starshipInfo.films}</span>
                        </li>
                    </ul>
                    <button className='btn btn-danger'>Сообщить об ошибке</button>
                </div>
            </div>
        )}
};
export default StarshipDetails;
