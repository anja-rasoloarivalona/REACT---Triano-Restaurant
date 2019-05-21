import React, { Component } from 'react'
import classes from './Menu.css';
import { NavLink } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from '../../components/Header/Header';

import Lunch from './Lunch/Lunch';
import Diner from './Diner/Diner';



import background from '../../Assets/img/menu/menuHeader.jpg';


import lunch from '../../Assets/img/menu/lunch.jpg';
import diner from '../../Assets/img/menu/diner.jpg';
import brunch from '../../Assets/img/menu/brunch.jpg';




class Menu extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <React.Fragment>

        <Header background={background}
                    text1 = "Our"
                    text2= "MENU"/>

                <section className={classes.Menu}>

                  <nav className={classes.Navbar}>           
                        <ul className={classes.List}>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + lunch + ")",
                                        backgroundPosition: 'center'}}
                                >
                                <NavLink exact to="/menu" className={classes.Link} activeClassName={classes.Active}>Lunch</NavLink>
                            </li>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + diner + ")",
                                        backgroundPosition: 'center'}}>
                                <NavLink exact to="/menu/diner" className={classes.Link} activeClassName={classes.Active}>Diner</NavLink>
                            </li>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + brunch + ")",
                                      backgroundPosition: 'center'}}>
                                <NavLink exact to="/menu/brunch" className={classes.Link} activeClassName={classes.Active}>Brunch</NavLink>
                            </li>
                        </ul>
                </nav>

                <Route exact path="/menu/" component={Lunch}></Route>                     
                <Route path="/menu/diner" component={Diner}></Route> 
                <Route path="/menu/brunch" component={Lunch}></Route>

                  

              </section>

  

    </React.Fragment>
    )
  }
}



export default Menu;