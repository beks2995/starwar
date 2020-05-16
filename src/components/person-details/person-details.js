import React,{Component} from 'react';
import './person-details.css';
import SwapiService from "../../services";

class PersonDetails extends Component{
    swapiService = new SwapiService();
    state = {
        personInfo: null
    };
    componentDidMount() {
        this.updatePerson()
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId){
            this.updatePerson()
        }
    };

    updatePerson(){
    this.swapiService
        .getPerson(this.props.personId)
        .then((personInfo)=>{
            this.setState({personInfo});
        });
}
    render() {
        const {personInfo} = this.state;
        if(!personInfo){
            return <span>Select a person from a list</span>
        }
    return (
        <div className='person-details'>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.personId}.jpg`} className='person-image' alt=""/>
            <div>
                <h4>{this.state.personInfo.name}</h4>
                <ul className='list-group list-group-flush'>

                    <li className='list-group-item'>
                        <span className='term'>Пол:</span>
                        <span>{this.state.personInfo.gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Год рождения:</span>
                        <span>{this.state.personInfo.birthYear}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Цвет глаз:</span>
                        <span>{this.state.personInfo.eyeColor}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Цвет волос:</span>
                        <span>{this.state.personInfo.hairColor}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Рост:</span>
                        <span>{this.state.personInfo.height} см</span>
                    </li>
                </ul>
                <button className='btn btn-danger'>Сообщить об ошибке</button>
            </div>
        </div>
    )}
};
export default PersonDetails;
