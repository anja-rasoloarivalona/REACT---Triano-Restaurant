import React from "react";
import classes from "./AboutStory.css";
import img1 from '../../../Assets/img/home/chef.jpg';
import img2 from '../../../Assets/img/home/story.jpg';

const aboutStory = () => {
  return (
    <section className={classes.Story}>
      <div className={classes.StoryText}>
        <div className={classes.StoryTitle}>
          <span>Our</span>
          <span>story</span>
        </div>
        <p>
          Triano is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon’s Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London intersection. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <p>
          Triano is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon’s Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London intersection. Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className={classes.StoryGallery}>
        <img src={img1} className={classes.StoryGalleryImg} />
        <img src={img2} className={classes.StoryGalleryImg} />
      </div>
    </section>
  );
};

export default aboutStory;
