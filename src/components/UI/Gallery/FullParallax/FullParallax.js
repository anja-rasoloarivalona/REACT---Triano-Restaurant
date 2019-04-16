import React from 'react';
import classes from './FullParallax.css';




const FullParallax = (props) => {
  return (
    <section style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + props.background + ")"}} className={classes.FullParallax}>
               <h2 className={classes.Text}>{props.text}</h2> 
    </section>
  )
}

export default FullParallax;
