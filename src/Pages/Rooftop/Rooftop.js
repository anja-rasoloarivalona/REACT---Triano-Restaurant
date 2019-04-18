import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../Assets/img/rooftopHeader.jpg';

import TextLeft from '../../components/UI/TextLeft/TextLeft';
import story from '../../Assets/img/home/story.jpg';
import chef from '../../Assets/img/home/chef.jpg';

const Rooftop = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "Our"
                    text2= "ROOFTOP"/>
          
          <TextLeft
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {story}
                                img2 = {chef}/>
    </React.Fragment>
  )
}

export default Rooftop;