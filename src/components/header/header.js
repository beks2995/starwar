import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = ()=>{
    return (
        <div className='header d-flex'>
            <h3>
            <a href="">StarWars</a>
            </h3>
            <ul className='d-flex'>
                <li><Link to='/person'>Персонажи</Link></li>
                <li><Link to='/'>Планеты</Link></li>
                <li><Link to='/starship'>Космические корабли</Link></li>
            </ul>
        </div>
    )
};

export default Header;
