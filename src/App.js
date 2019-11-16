import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Fundy from './Pages/fundy';
import Lux from './Pages/lux';
import Home from './Pages/home';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/fundy' component={Fundy}></Route>
        <Route path='/chin-li'></Route>
        <Route path='/lux' component={Lux}></Route>
        <Route path='/cash'></Route>
        <Route path='/comet'></Route>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
