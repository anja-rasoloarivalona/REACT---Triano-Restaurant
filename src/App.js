import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Top from './components/Header/Top/Top';
import Footer from './components/Footer/Footer';

import {Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

class App extends Component {
  render() {
    return (
      <Layout>
          <Top />
          <Navbar />
            <Route exact path="/" component={Home}></Route>                     
            <Route path="/about" component={About}></Route> 
          <Footer />   
      </Layout>
    );
  }
}

export default App;
