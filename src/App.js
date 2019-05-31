import React, { Component } from 'react';
import './App.css';

import AppLayout from './components/AppLayout/AppLayout';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawers';
import LogoContainer from './components/LogoContainer/LogoContainer';
import Footer from './components/Footer/Footer';

import {Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Rooftop from './Pages/Rooftop/Rooftop';
import Bar from './Pages/Bar/Bar';
import Reservation from './Pages/Reservation/Reservation';

class App extends Component {
  render() {
    return (
      <AppLayout>
          <LogoContainer />
          <SideDrawer />
          <Navbar />
            <Route exact path="/" component={Home}></Route>                     
            <Route path="/about" component={About}></Route> 
            <Route path="/menu" component={Menu}></Route>
            <Route path="/rooftop" component={Rooftop}></Route>
            <Route path="/bar" component={Bar}></Route>
            <Route path="/reservation" component={Reservation}></Route>
          <Footer />   
      </AppLayout>
    );
  }
}

export default App;
