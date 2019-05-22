import React from 'react';
import classes from './Bar.css';
import { NavLink, Route } from 'react-router-dom';


import Header from '../../components/Header/Header';

import Drinks from './Drinks/Drinks';
import HappyHour from './HappyHour/HappyHour';


import background from '../../Assets/img/barHeader.jpg';

const Bar = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "our"
                    text2= "BAR"/>


  <section className={classes.Menu}>

                <nav className={classes.Navbar}>           
                    <ul className={classes.List}>
                        <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                                    backgroundPosition: 'center'}}
                            >
                            <NavLink exact to="/bar/drinks" className={classes.Link} activeClassName={classes.Active}>Drinks</NavLink>
                        </li>
                        <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")",
                                    backgroundPosition: 'center'}}>
                            <NavLink exact to="/bar/happyHour" className={classes.Link} activeClassName={classes.Active}>Happy Hour</NavLink>
                        </li>
                    </ul>
                </nav>

                  
                <Route path="/bar/drinks" component={Drinks}></Route> 
                <Route path="/bar/happyHour" component={HappyHour}></Route>


  </section>
        
    </React.Fragment>
  )
}

export default Bar;