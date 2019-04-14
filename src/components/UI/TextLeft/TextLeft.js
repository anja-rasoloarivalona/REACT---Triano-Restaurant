import React from 'react';
import classes from './TextLeft.css';

 const TextLeft = (props) => {
  return (
    <section className={classes.TextLeft}>
                    <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>Discover</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p>                                                      
                    </div>
                    <div className={classes.Gallery}>
                        <img className={classes.Img} src={props.img1}/>
                        <img className={classes.Img} src={props.img2}/>
                    </div>                 
            </section>
  )
}

export default TextLeft; 


