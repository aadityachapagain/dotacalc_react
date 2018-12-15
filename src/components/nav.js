import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import dota from '../resources/Dota.png'

const Navbar = (props) => {
    return(
        <nav className="nav-wrappper blue-grey darken-1">
            <div className="container">
                <a  className="brand-logo">
                    <img src={dota} alt="dota logo" height="62" width="58"/>
                </a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/heros">Heros</NavLink></li>
                    <li><NavLink to="/predict">Predict</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar