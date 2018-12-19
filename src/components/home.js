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

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place. You can learn about hero roles in game 
                                            and their techniques to better spam your hero to farm more and increase the chance of winning any game !
                                        </p>
                                    </div>
                                    <div className="card-action">
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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>
                                            We proivde the Exclusive guides of each hero in the game individually so that you better play the games.
                                            We will teach you some tricks about heros that you can use which can be used to finally win any game.
                                        </p>
                                    </div>
                                    <div className="card-action">
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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>
                                            Put hero game stats with heros in Radiant and Dire side and successfully 
                                            predict the outcome of any games considering User will play without any mistakes of their own.
                                            It can be used while hero pickUp mode when you confused to pick any hero just buzz in the webpage pick heros of your team and opponent
                                            and see the chance of winning the game.
                                        </p>
                                    </div>
                                    <div className="card-action">
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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div className="card-action">
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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>All the Dota 2 Heros information you need to know , In same place</p>
                                    </div>
                                    <div className="card-action">
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
                                <div className={this.shuffle(classname).pop()}>
                                    <div className="card-content white-text">
                                        <p>If you want us Developer of this site to add new feature .Just drop us you view toward the webapp 
                                            and todo's to be added in this webapp. We would happy to add new cool stuff as your suggestions.
                                            Your suggestions are highly appriciated !
                                            <br /><br />
                                            Thanks
                                            <br /><br />
                                            Keep Gaming !
                                        </p>
                                    </div>
                                    <div className="card-action">
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