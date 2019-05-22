import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.css';

const  Navbar = () => {
  return (
    <nav className={classes.Navbar}>           
                <ul className={classes.List}>
                    <li>
                        <Link to="/" className={classes.Link}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" className={classes.Link}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/menu" className={classes.Link}>MENU</Link>
                    </li>
                    <li>
                        <Link to="/bar" className={classes.Link}>BAR</Link>
                    </li>
                    <li>
                        <Link to="/rooftop" className={classes.Link}>ROOFTOP</Link>
                    </li>
                    
                    <li>
                        <Link to="/reservation" className={classes.Link}>RESERVATION</Link>
                    </li>
                </ul>
        </nav>
  )
}

export default Navbar;
