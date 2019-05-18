import React from 'react';
import classes from './Menu.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from '../../components/Header/Header';

import Lunch from './Lunch/Lunch';
import Diner from './Diner/Diner';



import background from '../../Assets/img/menuHeader.jpg';

const menu = () => {
  return (
    <React.Fragment>

        <Header background={background}
                    text1 = "Our"
                    text2= "MENU"/>

                <section className={classes.Menu}>

                  <nav className={classes.Navbar}>           
                        <ul className={classes.List}>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")"}}>>
                                <Link to="/menu" className={classes.Link}>Lunch</Link>
                            </li>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")"}}>>
                                <Link to="/menu/diner" className={classes.Link}>Diner</Link>
                            </li>
                            <li style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + background + ")"}}>>
                                <Link to="/menu/brunch" className={classes.Link}>Brunch</Link>
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

export default menu;