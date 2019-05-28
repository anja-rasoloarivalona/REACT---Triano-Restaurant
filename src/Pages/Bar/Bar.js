import React, { Component } from 'react'
import classes from './Bar.css';
import { NavLink, Route } from 'react-router-dom';


import Header from '../../components/Header/Header';

import Drinks from './Drinks/Drinks';
import HappyHour from './HappyHour/HappyHour';


import background from '../../Assets/img/barHeader.jpg';



class Bar extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <React.Fragment>
        <Header background={background}
                    text1 = "Our"
                    text2= "BAR"/>


  <section className={classes.Menu}>

                <nav className={classes.Navbar}>           
                    <ul className={classes.List}>
                        <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                                    backgroundPosition: 'center'}}
                            >
                            <NavLink exact to="/bar" className={classes.Link} activeClassName={classes.Active}>Drinks</NavLink>
                        </li>
                        <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                                    backgroundPosition: 'center'}}>
                            <NavLink exact to="/bar/happyHour" className={classes.Link} activeClassName={classes.Active}>Happy Hour</NavLink>
                        </li>
                    </ul>
                </nav>

                  
                <Route exact path="/bar" component={Drinks}></Route> 
                <Route exact path="/bar/happyHour" component={HappyHour}></Route>


  </section>
        
    </React.Fragment>
    )
  }
}

export default Bar;