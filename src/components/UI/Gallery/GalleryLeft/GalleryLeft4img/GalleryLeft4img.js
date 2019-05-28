import React from 'react';
import classes from './GalleryLeft4img.css';

const GalleryLeft4img = (props) => {
  return (
    <div className={classes.Gallery}>

              <div className={classes.GalleryItem}>
                  <img className={classes.Img} src={props.img1} />
                    <span className={classes.Text}>{props.galleryText1}</span>
                </div>

                <div className={classes.GalleryItem}>
                  <img className={classes.Img} src={props.img2} />
                    <span className={classes.Text}>{props.galleryText2}</span>
                </div>

                <div className={classes.GalleryItem}>
                  <img className={classes.Img} src={props.img3} />
                    <span className={classes.Text}>{props.galleryText3}</span>
                </div>

                <div className={classes.GalleryItem}>
                  <img className={classes.Img} src={props.img4} />
                    <span className={classes.Text}>{props.galleryText4}</span>
                </div>
         


        
    </div>
  )
}

export default GalleryLeft4img;