import React, { Component } from 'react'
import Navbar from './nav'
import '../css/home.css'
import dotablur from '../resources/dota_back_blur.jpg'

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

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6">

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6">

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m6 l6 push-m6 push-l6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home