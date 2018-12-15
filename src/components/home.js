import React, { Component } from 'react'
import Navbar from './nav'
import '../css/home.css'
import {Link , NavLink} from 'react-router-dom'
import dotablur from '../resources/dota_back_blur.jpg'
import heros from '../resources/heros_blur.jpg'
import counter from '../resources/counters_blur.jpg'
import predict from '../resources/predict_blur.jpg'
import hero from '../resources/hero_blur.jpg'

class Home extends Component{

    render(){

        return(
            <div>
                <Navbar />
                <img src={dotablur} id="back-ground" />
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className=" card blue-grey darken-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">
                            <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className=" card blue-grey lighten-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6">
                            <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className=" card blue-grey lighten-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">
                            <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className=" card blue-grey lighten-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6">
                            <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className=" card blue-grey lighten-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">
                            <div className="card hoverable">
                                    <div className="card-image">
                                        <img src={heros} />   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className=" card blue-grey lighten-3">
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div class="card-action">
                                        <NavLink to='/heros'>Dota 2 Heros</NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home