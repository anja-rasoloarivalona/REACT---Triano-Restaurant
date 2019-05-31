import React, { Component, Suspense } from 'react';
import './App.css';

import AppLayout from './components/AppLayout/AppLayout';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawers';
import LogoContainer from './components/LogoContainer/LogoContainer';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
import {Route, Switch} from 'react-router-dom';

import Home from './Pages/Home/Home';

const About = React.lazy(() => import('./Pages/About/About'));
const lazyAbout = () => (
  <Suspense fallback={<Spinner/>}>
        <About />
  </Suspense>
)

const Menu = React.lazy(() => import('./Pages/Menu/Menu'));
const lazyMenu = () => (
  <Suspense fallback={<Spinner/>}>
        <Menu />
  </Suspense>
)

const Rooftop = React.lazy(() => import('./Pages/Rooftop/Rooftop'));
const lazyRooftop = () => (
  <Suspense fallback={<Spinner/>}>
        <Rooftop />
  </Suspense>
)

const Bar = React.lazy(() => import('./Pages/Bar/Bar'));
const lazyBar = () => (
  <Suspense fallback={<Spinner/>}>
        <Bar />
  </Suspense>
)

const Reservation = React.lazy(() => import('./Pages/Reservation/Reservation'));
const lazyReservation = () => (
  <Suspense fallback={<div>Loading....</div>}>
        <Reservation />
  </Suspense>
)



class App extends Component {
  render() {
    return (
      <AppLayout>
          <LogoContainer />
          <SideDrawer />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>                     
            <Route path="/about" component={lazyAbout}></Route> 
            <Route path="/menu" component={lazyMenu}></Route>
            <Route path="/rooftop" component={lazyRooftop}></Route>
            <Route path="/bar" component={lazyBar}></Route>
            <Route path="/reservation" component={lazyReservation}></Route>
            <Route component={Home}/>
            </Switch>
          <Footer />   
      </AppLayout>
    );
  }
}

export default App;
