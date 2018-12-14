import React, { Component } from 'react'
import Navbar from './nav'

class Contact extends Component{

    render(){

        return(
            <div>
                <Navbar />
                <div className="container">
                    
                    <p>
                        This is home page!
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact
