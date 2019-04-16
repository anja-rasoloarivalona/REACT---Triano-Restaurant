import React from 'react';

import classes from './Main.css';
import symbol from '../../../Assets/icon/SVG/px.svg';
import ReactSVG from 'react-svg';

const Main = (props) => {
  return (
    <section className={classes.Main}>  
               <div className={classes.Welcome}>
                    <h1 className={classes.WelcomeTitle}>{props.text1}</h1>
                    <h1 className={classes.Name}>{props.text2}</h1>      

               
               </div>          
        </section>
  )
}

export default Main; 

/*  <h3>The right place to be</h3> */