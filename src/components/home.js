import React, { Component } from 'react'
import Navbar from './nav'
import '../css/home.css'
import {Link , NavLink} from 'react-router-dom'
import dotablur from '../resources/dota_back_blur.jpg'
import heros from '../resources/heros_blur.jpg'
import counter from '../resources/counters_blur.jpg'
import predict from '../resources/predict_blur.jpg'
import hero from '../resources/hero_blur.jpg'
import roshan from '../resources/roshan_blur.jpg'
import dev from '../resources/dev.jpg'

class Home extends Component{

    render(){
        let  classname = ['red darken-4','pink darken-4','purple darken-4','deep-purple darken-4','indigo darken-4','blue darken-4','light-blue darken-4','cyan darken-4','teal darken-4','green darken-4',' light-green darken-4','lime darken-4','amber darken-4','blue-grey darken-4']
        classname = classname.map( cls => 'card '+cls)
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
                                        <img src={heros} alt='hero'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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
                                        <img src={hero} alt='dota 2'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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
                                        <img src={predict} alt='dota 2'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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
                                        <img src={counter} alt='dota 2'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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
                                        <img src={roshan} alt='dota 2 roshan'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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
                                        <img src={dev} alt='contact the developer'/>   
                                    </div>
                                </div>
                            </div>
                            <div className="container col s12 m6 l6 pull-m6 pull-l6">
                                <div className={classname[Math.floor(Math.random()*classname.length)]}>
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