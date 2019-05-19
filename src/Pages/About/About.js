import React, { Component } from 'react'
import classes from './About.css';


import Header from '../../components/Header/Header';
import TextRight from '../../components/UI/TextRight/TextRight';
import TextLeft from '../../components/UI/TextLeft/TextLeft';
import FullParallax from '../../components/UI/Gallery/FullParallax/FullParallax';


import background from '../../Assets/img/about/aboutHeader.jpg';
import img1 from '../../Assets/img/home/chef.jpg';
import img2 from '../../Assets/img/home/story.jpg';


import chef1 from '../../Assets/img/about/chef1.png';
import chef2 from '../../Assets/img/about/chef2.png';
import chef3 from '../../Assets/img/about/chef3.png';

import teamBg from '../../Assets/img/about/teamBg.jpg';
import dining from '../../Assets/img/home/dining-room.png';
import rooftop from '../../Assets/img/home/rooftop.jpg';


class About extends Component {
      componentDidMount() {
            window.scrollTo(0, 0)
          }
  render() {
    return (
      <React.Fragment>
        <Header background={background}
                    text1 = "About"
                    text2= "US"/>

      <section className={classes.Story}>
            <div className={classes.StoryText}>
                  <div className={classes.StoryTitle}>
                        <span>Our</span>
                        <span>Story</span> 
                  </div>
                  <p>
                        Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                  </p>
                  <p>
                        Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.  
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  </p>
            </div>
            <div className={classes.StoryGallery}>
                  <img src={img1} className={classes.StoryGalleryImg}/>
                  <img src={img2} className={classes.StoryGalleryImg}/>
            </div>
           
      </section> 
       

      <FullParallax background = {background}
                                      text = ""/>
        
        <section className={classes.OurTeam}>
            <div className={classes.OurTeamTitle}>
                  <span>Meet</span>
                  <span>Our Chef</span>
            </div>
            <p>
                  Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.
                  With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.    
            </p>
             
        </section>

        <section className={classes.TeamContainer}
              style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + teamBg + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"}}>


            

                  <div className={classes.Team}>
                      <div className={classes.TeamImgContainer}>
                            <img src={chef1} className={classes.TeamImg}/>
                      </div>
                      <div className={classes.TeamName}>
                            <div>John Doe</div>
                      </div>
                  </div>

                  <div className={classes.Team}>
                      <div className={classes.TeamImgContainer}>
                            <img src={chef2} className={classes.TeamImg}/>
                      </div>
                      <div className={classes.TeamName}>
                            <div>Fred Doe</div>
                      </div>
                  </div>
                  <div className={classes.Team}>
                      <div className={classes.TeamImgContainer}>
                            <img src={chef3} className={classes.TeamImg}/>
                      </div>
                      <div className={classes.TeamName}>
                            <div>Jeanne Doe</div>
                      </div>
                  </div>
         
        </section>

        <TextLeft
            path = '/reservation'
            buttonValue = 'Book a table'
            action = "Book"
            twoImg
            title = "Your table" 
            text = ""
            img1 = {dining}
            img2 = {rooftop}/>
                    
    </React.Fragment>
    )
  }
}




export default About;
