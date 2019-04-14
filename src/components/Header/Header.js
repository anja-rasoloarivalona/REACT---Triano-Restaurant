import React from 'react';
import classes from './Header.css';
import Main from './Main/Main';


const Header = (props) => {
  return (
    <header 
        className={classes.Header}
        style={{backgroundImage: "url(" + props.background + ")"}}>

        <Main title={props.title} />
        

    </header>
  )
} 

export default Header;
