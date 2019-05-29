import React from 'react';
import classes from './GalleryLeft2img.css';

const GalleryLeft2img = (props) => {

 let galleryClass = [classes.GalleryItem, classes.Delete]
  return (
    <div className={classes.Gallery}>  

                <div className={galleryClass.join(' ')}>
                    <img className={classes.Img} src={props.img1} />
                    <span className={classes.Text}>{props.galleryText1}</span>
                </div>
      
          
                <div className={classes.GalleryItem}>
                    <img className={classes.Img} src={props.img2} />
                    <span className={classes.Text}>
                          {props.galleryText2}
                      </span>
                </div>
    </div>
  )
}

export default GalleryLeft2img;
