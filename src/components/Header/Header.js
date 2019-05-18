import React from 'react';
import classes from './Header.css';
import Main from './Main/Main';


const Header = (props) => {
  return (
    <header 
        className={classes.Header}
        style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + props.background + ")",
                backgroundPosition: "center"}}>

        <Main text1={props.text1}
              text2={props.text2} />
        

    </header>
  )
} 

export default Header;
