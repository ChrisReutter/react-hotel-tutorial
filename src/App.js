import React from 'react';
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import {  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route> 
      <Route exact path="/rooms" component={Rooms}></Route>
      <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
    <Route component={Error} />
</Switch>
 </div>
  )}

export default App;