import React from 'react';
import classes from './Home.css';

import Header from '../../components/Header/Header';
import TextLeft from '../../components/UI/TextLeft/TextLeft';
import TextRight from '../../components/UI/TextRight/TextRight';
import FullParallax from '../../components/UI/Gallery/FullParallax/FullParallax';


import homeHeader from '../../Assets/img/home/homeHeader.jpg';

import story from '../../Assets/img/home/story.jpg';
import chef from '../../Assets/img/home/chef.jpg';

import menu1 from '../../Assets/img/home/menu-1.jpg';
import menu2 from '../../Assets/img/home/menu-2.jpg';
import menu3 from '../../Assets/img/home/menu-3.jpg';
import menu4 from '../../Assets/img/home/menu-4.jpg';

import diningRoom from '../../Assets/img/home/diner-room.jpg';
import rooftop from '../../Assets/img/home/rooftop.jpg';
import bar from '../../Assets/img/home/bar.jpeg';


import drinks1 from '../../Assets/img/home/drinks-1.jpg';
import drinks2 from '../../Assets/img/home/drinks-2.jpg';
import drinks3 from '../../Assets/img/home/drinks-3.jpg';
import drinks4 from '../../Assets/img/home/menu-4.jpg';



import discover1 from '../../Assets/img/discover1.jpg';
import discover2 from '../../Assets/img/discover2.jpg';


const Home = () => {
  return (
    <React.Fragment>

            <Header 
                    text1 = "Welcome"
                    text2 =  "THE TRIANO"
                    background={homeHeader} />
               

           
            
                        <TextLeft
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {story}
                                img2 = {chef}/>
                    

                        <FullParallax background = {diningRoom}
                                      text = "The Dining Room"/>

                        <TextRight 
                                title = "OUR MENU" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                
                                img1 = {menu1}
                                img2 = {menu2}
                                img3 = {menu3}
                                img4 = {menu4}/>
                                

                                <FullParallax background = {rooftop}
                                      text = "The Rooftop"/>

                        <TextLeft
                              
                                title = "OUR BAR" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {drinks1}
                                img2 = {drinks2}
                                img3 = {drinks3}
                                img4 = {drinks4}/>
                        
                        <FullParallax background = {bar}
                                      text = "The Bar"/>
                        
                        <TextRight
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {discover1}
                                img2 = {discover2}/>
                               
                    

        


    </React.Fragment>
       
   
  )
}

export default Home;



/*  */