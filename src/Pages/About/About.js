import React from 'react';
import Header from '../../components/Header/Header';

import TextRight from '../../components/UI/TextRight/TextRight';


import background from '../../Assets/img/about/aboutHeader.jpg';
import img1 from '../../Assets/img/home/chef.jpg';
import img2 from '../../Assets/img/home/story.jpg';




const About = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "About"
                    text2= "US"/>

        <TextRight
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {img1}
                                img2 = {img2}/>
    </React.Fragment>
  )
}

export default About;
