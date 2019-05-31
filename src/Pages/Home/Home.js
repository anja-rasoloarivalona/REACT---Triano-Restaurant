import React, { Component } from "react";
import Header from "../../components/Header/Header";

/*---------UI COMPONENTS---*/
import TextLeft from "../../components/UI/TextLeft/TextLeft";
import TextRight from "../../components/UI/TextRight/TextRight";
import FullParallax from "../../components/UI/Gallery/FullParallax/FullParallax";

/*---------IMG---------- */

import homeHeader from "../../Assets/img/home/homeHeader.jpg";
import story from "../../Assets/img/home/story.jpg";
import chef from "../../Assets/img/home/chef.jpg";
import menu1 from "../../Assets/img/home/menu-1.jpg";
import menu2 from "../../Assets/img/home/menu-2.jpg";
import menu3 from "../../Assets/img/home/menu-3.jpg";
import menu4 from "../../Assets/img/home/menu-4.jpg";
import diningRoom from "../../Assets/img/home/dining-room.png";
import rooftop from "../../Assets/img/home/rooftop.jpg";
import drinks1 from "../../Assets/img/home/drinks-1.jpg";
import drinks2 from "../../Assets/img/home/drinks-2.jpg";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Header text1="Welcome" text2="THE TRIANO" background={homeHeader} />

        <TextLeft
          path="/about"
          buttonValue="About Us"
          action="Discover"
          twoImg
          title="OUR STORY"
          text="Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
          img1={story}
          img2={chef}
          galleryText1="Since 1978"
          galleryText2="Christian Le Squer"
        />

        <FullParallax background={diningRoom} text="The Dining Room" />

        <TextRight
          action="Discover"
          title="OUR MENU"
          text="Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
          img1={menu1}
          galleryText1="Filet Mignon"
          img2={menu2}
          galleryText2="Warm thin crust apple tart"
          img3={menu3}
          galleryText3="Pork Medallions"
          img4={menu4}
          galleryText4="Crêpe Suzette"
          path="/menu"
          buttonValue="Our Menu"
        />

        <FullParallax background={rooftop} text="The Rooftop" />

        <TextLeft
          path="/bar"
          buttonValue="Our Bar"
          action="Discover"
          twoImg
          title="OUR BAR"
          text="Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
          img1={drinks1}
          img2={drinks2}
          galleryText1="Midnight in Paris"
          galleryText2="Light and Balmy"
        />
      </React.Fragment>
    );
  }
}

export default Home;
