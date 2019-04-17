import React from 'react';
import classes from './Menu.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


import Header from '../../components/Header/Header';
import Lunch from './Lunch/Lunch';



import background from '../../Assets/img/menuHeader.jpg';

const Menu = () => {
  return (
    <React.Fragment>

        <Header background={background}
                    text1 = "Our"
                    text2= "MENU"/>

                <section className={classes.Menu}>

                  <nav className={classes.Navbar}>           
                        <ul className={classes.List}>
                            <li>
                                <Link to="/menu" className={classes.Link}>LUNCH</Link>
                            </li>
                            <li>
                                <Link to="/menu/diner" className={classes.Link}>DINER</Link>
                            </li>
                            <li>
                                <Link to="/menu/brunch" className={classes.Link}>BRUNCH</Link>
                            </li>
                        </ul>
                </nav>

                <Route exact path="/menu/" component={Lunch}></Route>                     
                <Route path="/menu/diner" component={Lunch}></Route> 
                <Route path="/menu/brunch" component={Lunch}></Route>

                  

              </section>

  

    </React.Fragment>
  )
}

export default Menu;