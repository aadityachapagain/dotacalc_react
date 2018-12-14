import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import Heros from './components/heros'
import Home from './components/home'
import Hero from './components/hero'
import Contact from './components/contact'
import Predict from './components/predict'


class App extends Component {

  componentDidMount(){
    Axios.get('localhost:5000/api/hero',{
    }).then(
      (res) => { 
        console.log(res.data)
      }
    ).catch((err) => {
      console.log('error occured !')
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

export default App;
