import React from 'react';
import classes from './TextLeft.css';
import GalleryLeft2img from '../Gallery/GalleryLeft/GalleryLeft2img/GalleryLeft2img';
import GalleryLeft4img from '../Gallery/GalleryLeft/GalleryLeft4img/GalleryLeft4img';

 const TextLeft = (props) => {

        let gallery;

        if (props.twoImg) {
                gallery = <GalleryLeft2img 
                                img1 = {props.img1}
                                img2 = {props.img2}/>
                                
        } else {
      
                gallery = <GalleryLeft4img
                                img1 = {props.img1}
                                img2 = {props.img2}
                                img3 = {props.img3}
                                img4 = {props.img4}/>
        }


  return (
    <section className={classes.TextLeft}>
                    <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>Discover</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p>                                                      
                    </div>
                    {gallery}               
            </section>
  )
}

export default TextLeft; 


