import React, { Component } from 'react'
import Navbar from './nav'
import '../css/home.css'
import dotablur from '../resources/dota_blur.jpg'

class Home extends Component{

    render(){

        return(
            <div>
                <Navbar />
                <img src={dotablur} id="back-ground" />
                <div className="container">
                    
                    <p> 
                        This is home page!
                    </p>
                </div>
            </div>
        )
    }
}

export default Home
