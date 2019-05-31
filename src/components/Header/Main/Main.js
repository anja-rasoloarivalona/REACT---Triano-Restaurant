import React from 'react';

import classes from './Main.css';
import { Spring } from 'react-spring/renderprops';


const Main = (Myprops) => {
  return (
    <Spring
        from={{ marginTop: - 100}}
        to={{ marginTop: 0}}
        config={{duration: 300}}
    >
      {props => (
        <div style={props} className={classes.Main}>
            <section className={classes.Main}>  
               <div className={classes.Welcome}>
                    <h1 className={classes.WelcomeTitle}>{Myprops.text1}</h1>
                    <h1 className={classes.Name}>{Myprops.text2}</h1>      

               
               </div>          
            </section>
        </div>
        

      )}
    
    </Spring>
  )
}

export default Main; 

/*  <h3>The right place to be</h3> */