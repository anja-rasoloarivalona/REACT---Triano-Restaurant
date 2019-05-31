import React from 'react';
import classes from './TextRight.css';
import Button from '../../Button/Button';

import Gallery2img from '../Gallery/Gallery2img/Gallery2img';
import Gallery4img from '../Gallery/Gallery4img/Gallery4img';

 const TextRight = (props) => {

        let gallery;

        if (props.twoImg) {gallery = <Gallery2img {...props}/>} 
                else {gallery = <Gallery4img {...props}/>}

        return (
           <section className={classes.TextRight}>                   
                  {gallery}
                  <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>{props.action}</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p> 
                            <Button 
                                path = {props.path}
                                buttonValue = {props.buttonValue}/>                                                   
                  </div>                                
            </section>
  )
}

export default TextRight; 


