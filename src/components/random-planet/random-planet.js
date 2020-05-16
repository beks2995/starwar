import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/'
import Spinner from '../spiner/'
import ErrorIndicator from '../error-indicator'

class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loader: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 3000);
    };

    onError = (err) => {
        this.setState({
                error: true,
                loader: false
            }
        )
    };
    onPlanetLoaded = (planet) => {
        this.setState(
            {
                planet,
                loader: false,
                error: false
            }
        );
        console.log(planet)
    };

    updatePlanet = () => {
        let id = Math.floor(Math.random() * 19) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const {planet, loader, error} = this.state;
        const hasData = !(loader || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loader ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        return (
                <div className='random-planet'>
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
                    )
    }
}

const PlanetView = ({planet}) => {
    const {name, population, rotationPeriod, diameter, id} = planet;
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className='planet-image' alt=""/>
            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Население:</span>
                        <span>{population} существ</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Период вращения:</span>
                        <span>{rotationPeriod} часа</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Диаметр:</span>
                        <span>{diameter} км</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};
export default RandomPlanet;
