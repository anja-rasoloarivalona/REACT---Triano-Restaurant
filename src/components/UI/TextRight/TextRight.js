import React from 'react';
import classes from './TextRight.css';

 const TextRight = (props) => {
  return (
    <section className={classes.TextRight}>

                    <div className={classes.Gallery}>
                                        <img className={classes.Img} src={props.img1}/>
                                        <img className={classes.Img} src={props.img2}/>
                    </div>
                    <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>Discover</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p>                                                      
                    </div>
                                     
            </section>
  )
}

export default TextRight; 