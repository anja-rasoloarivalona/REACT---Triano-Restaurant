import React, { Component } from "react";
import Header from "../../components/Header/Header";
import AboutStory from "./AboutStory/AboutStory";
import TeamIntro from './TeamIntro/TeamIntro';
import Team from './Team/Team';

/*--------UI COMPONENTS-------*/
import TextLeft from "../../components/UI/TextLeft/TextLeft";
import FullParallax from "../../components/UI/Gallery/FullParallax/FullParallax";

/*---------IMG-------------*/
import background from "../../Assets/img/about/aboutHeader.jpg";
import dining from "../../Assets/img/home/dining-room.png";
import rooftop from "../../Assets/img/home/rooftop.jpg";


class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Header background={background} text1="About" text2="US" />
        <AboutStory />
        <FullParallax background={background} text="" />
        <TeamIntro />  
        <Team />
        <TextLeft
          path="/reservation"
          buttonValue="Book a table"
          action="Book"
          twoImg
          title="Your table"
          text="Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection. "
          img1={dining}
          img2={rooftop}
          galleryText1 = 'The Dining room'
          galleryText2 = 'The Rooftop'
          />
      </React.Fragment>
    );
  }
}

export default About;
