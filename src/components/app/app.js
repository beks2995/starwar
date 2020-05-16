import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Person from '../person'
import Starship from '../starship'
import './app.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component{
    state ={
        showRandomPlanet:  true,
    };
    toggleRandomPlanet =()=>{
        this.setState({showRandomPlanet: !this.state.showRandomPlanet})
    };

    render (){
        const planet =this.state.showRandomPlanet? <RandomPlanet/> : null;
        return(
            <div>
                <Router>
                <Header/>
                {planet}
                <button onClick={this.toggleRandomPlanet} className='btn hidden'>Hidden Planet</button>

                <Route path='/person' component={Person}/>
                <Route path='/starship' component={Starship}/>

                </Router>
            </div>
        )
    }
}


export default App;