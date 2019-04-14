import React from 'react';
import classes from './Header.css';


const Header = (props) => {
  return (
    <header 
        className={classes.Header}
        style={{backgroundImage: "url(" + props.background + ")"}}>

    </header>
  )
} 

export default Header;
