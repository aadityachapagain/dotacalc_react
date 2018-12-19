import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import Heros from './components/heros'
import Home from './components/home'
import Hero from './components/hero'
import Contact from './components/contact'
import Predict from './components/predict'
import { addHeros } from '../actions/postActions'
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount(){
    Axios.get('http://localhost:3001/api/hero')
    .then(res => res.data)
    .then( data => {
      this.props.dispatch(data)
    })

  }

  render() {
    return (
      <BrowserRouter>
        <div className="Dota-app">
          <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/heros' component= {Heros} />
            <Route path='/contact' component= {Contact}/>
            <Route path='/predict' component= {Predict} />
            <Route path="heros/:hero_id" component= {Hero} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


const mapDispatchToProps = (Dispatch) => {
  return {
      dispatch : (heros) => {Dispatch(addHeros(heros))}
  }
}


export default connect(null,mapDispathToProps)(App);