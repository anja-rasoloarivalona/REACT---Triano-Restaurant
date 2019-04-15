import React from 'react';
import classes from './GalleryLeft2img.css';

const GalleryLeft2img = (props) => {
  return (
    <div className={classes.Gallery}>
         <img className={classes.Img} src={props.img1}/>
          <img className={classes.Img} src={props.img2}/>
    </div>
  )
}

export default GalleryLeft2img;
