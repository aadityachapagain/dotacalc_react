import React, { Component } from 'react'
import Navbar from './nav'
import '../css/heros.css'
import dotablur from '../resources/arcana_blur.jpg'
import { connect } from 'react-redux'


class Heros extends Component{

    render(){
        const { heros } = this.props
        let StrengthList = []
        let agilityList = []
        let intelligenceList = []
        heros.map( (hero) => {
            if (hero.ability.toLowerCase() === "strength")
            {
                StrengthList.push(hero)
            }
            if (hero.ability.toLowerCase() === "agility")
            {
                agilityList.push(hero)
            }
            if (hero.ability.toLowerCase() === "intelligence")
            {
                intelligenceList.push(hero)
            }
        })
        StrengthList = StrengthList.map( (hero , index) => {
            return(
                <div className="col s6 m3 l3">
                    <div className="card hoverable" key={index}>
                        <div className="card-image" id="hero">
                            <img src={hero.img_link} alt={hero.name}/>
                        </div>
                    </div>
                </div>
            )
        })

        agilityList = agilityList.map( (hero , index) => {
            return(
                <div className="col s6 m3 l3">
                    <div className="card hoverable " key={index}>
                        <div className="card-image" id="hero">
                            <img src={hero.img_link} alt={hero.name}/>
                        </div>
                    </div>
                </div>
            )
        })

        intelligenceList = intelligenceList.map( (hero , index) => {
            return(
                <div className="col s6 m3 l3">
                    <div className="card hoverable " key={index}>
                        <div className="card-image" id="hero">
                            <img src={hero.img_link} alt={hero.name}/>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <Navbar />
                <img src={dotablur} id="back-ground" />
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="container">
                            <h6 className="grey-text"><b>STRENGTH</b></h6>
                            <div className="divider"></div>
                            <br />
                            <div className="row">
                                {StrengthList}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="container">
                            <h6 className="grey-text"><b>AGILITY</b></h6>
                            <div className="divider"></div>
                            <br />
                            <div className="row">
                                {agilityList}
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="container">
                            <h6 className="grey-text"><b>INTELLIGENCE</b></h6>
                            <div className="divider"></div>
                            <br />
                            <div className="row">
                                {intelligenceList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {heros: state.heros}
}

export default connect(mapStateToProps)(Heros)