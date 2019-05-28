import React from 'react';
import classes from './TextRight.css';
import Button from '../../Button/Button';

import GalleryLeft2img from '../Gallery/GalleryLeft/GalleryLeft2img/GalleryLeft2img';
import GalleryLeft4img from '../Gallery/GalleryLeft/GalleryLeft4img/GalleryLeft4img';

 const TextRight = (props) => {

        let gallery;

        if (props.twoImg) {
                gallery = <GalleryLeft2img 
                                {...props}/>
                                
        } else {
                console.log('4img')
                gallery = <GalleryLeft4img
                                {...props}/>
        }

  return (
    <section className={classes.TextRight}>                   
                {gallery}
                    <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>{props.action}</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p> 

                            <Button 
                        path = {props.path}
                        buttonValue = {props.buttonValue}
                         />
                                                     
                    </div>

                    
                    

                                     
            </section>
  )
}

export default TextRight; 


/* <div className={classes.Gallery}>
                                        <img className={classes.Img} src={props.img1}/>
                                        <img className={classes.Img} src={props.img2}/>
                    </div> */