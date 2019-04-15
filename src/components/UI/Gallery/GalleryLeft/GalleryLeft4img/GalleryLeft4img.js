import React from 'react';
import classes from './GalleryLeft4img.css';

const GalleryLeft4img = (props) => {
  return (
    <div className={classes.Gallery}>
         <img className={classes.Img} src={props.img1}/>
          <img className={classes.Img} src={props.img2}/>
          <img className={classes.Img} src={props.img3}/>
          <img className={classes.Img} src={props.img4}/>
    </div>
  )
}

export default GalleryLeft4img;