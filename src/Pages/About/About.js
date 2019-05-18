import React from 'react';
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

import teamBg from '../../Assets/img/about/teamBg.jpg'




const About = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "About"
                    text2= "US"/>

        <TextRight
            action = "Discover"
            twoImg
            title = "OUR STORY" 
            text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
            img1 = {img1}
            img2 = {img2}/>

<FullParallax background = {background}
                                      text = ""/>
        
        <section className={classes.OurTeam}>
            Meet Our Chef
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
                            <div>John Doe</div>
                      </div>
                  </div>
                  <div className={classes.Team}>
                      <div className={classes.TeamImgContainer}>
                            <img src={chef3} className={classes.TeamImg}/>
                      </div>
                      <div className={classes.TeamName}>
                            <div>John Doe</div>
                      </div>
                  </div>
         
        </section>

        <TextLeft
            action = "Book"
            twoImg
            title = "Your table" 
            text = ""
            img1 = {img1}
            img2 = {img2}/>
                    
    </React.Fragment>
  )
}

export default About;
