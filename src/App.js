import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Fundy from './Pages/fundy';
import Lux from './Pages/lux';
import Home from './Pages/home';

import FundyImg from './static/images/fundy.jpg'
import LuxImg from './static/images/lux.jpg'
import CashImg from './static/images/cash.jpg'
import ChinLiImg from './static/images/chin-li.jpg'

function App() {

  let pets = [
    {
      img: FundyImg,
      name: 'Fundy',
      type: 'HedgeHog',
      link: '/fundy',
      id: 1
    },
    {
      img: ChinLiImg,
      name: 'Chin Li',
      type: 'Chinchilla',
      link: '/chin-li',
      id: 2
    },
    {
      img: LuxImg,
      name: 'Lux',
      type: 'Bearded Dragon',
      link: '/lux',
      id: 3
    },
    {
      img: CashImg,
      name: 'Cash',
      type: 'Golden Retriever',
      link: '/cash',
      id: 4
    },
    {
      img: CashImg,
      name: 'Comet',
      type: 'Tangerine Milk Snake',
      link: '/comet',
      id: 5
    }
  ];

  return (
    <Router basename="/">
      <Navbar pets={pets}></Navbar>
      <Switch>
        <Route path='/fundy' component={Fundy}></Route>
        <Route path='/chin-li'></Route>
        <Route path='/lux' component={Lux}></Route>
        <Route path='/cash'></Route>
        <Route path='/comet'></Route>
        <Route exact path='/' render={(props) => <Home {...props} pets={pets}/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
