import React from 'react';
import classes from './TextRight.css';
import GalleryLeft2img from '../Gallery/GalleryLeft/GalleryLeft2img/GalleryLeft2img';
import GalleryLeft4img from '../Gallery/GalleryLeft/GalleryLeft4img/GalleryLeft4img';

 const TextRight = (props) => {

        let gallery;

        if (props.twoImg) {
                gallery = <GalleryLeft2img 
                                img1 = {props.img1}
                                img2 = {props.img2}/>
                                
        } else {
                console.log('4img')
                gallery = <GalleryLeft4img
                                img1 = {props.img1}
                                img2 = {props.img2}
                                img3 = {props.img3}
                                img4 = {props.img4}/>
        }

  return (
    <section className={classes.TextRight}>                   
                {gallery}
                    <div className={classes.TextContainer}>
                            <h3 className={classes.TextTitle}>{props.action}</h3>
                            <h3 className={classes.TextSubtitle}>{props.title}</h3>
                            <p className={classes.Text}>{props.text}</p>                                                      
                    </div>
                                     
            </section>
  )
}

export default TextRight; 


/* <div className={classes.Gallery}>
                                        <img className={classes.Img} src={props.img1}/>
                                        <img className={classes.Img} src={props.img2}/>
                    </div> */