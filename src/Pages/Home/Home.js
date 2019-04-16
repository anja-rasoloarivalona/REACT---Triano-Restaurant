import React from 'react';
import classes from './Home.css';

import Header from '../../components/Header/Header';
import HomeLayout from '../../Pages/Home/HomeLayout/HomeLayout';
import TextLeft from '../../components/UI/TextLeft/TextLeft';
import TextRight from '../../components/UI/TextRight/TextRight';


import homeHeader from '../../Assets/img/home/homeHeader.jpg';

import story from '../../Assets/img/home/story.jpg';
import chef from '../../Assets/img/home/chef.jpg';

import menu1 from '../../Assets/img/home/menu-1.jpg';
import menu2 from '../../Assets/img/home/menu-2.jpg';
import menu3 from '../../Assets/img/home/menu-3.jpg';
import menu4 from '../../Assets/img/home/menu-4.jpg';

import dinerRoom from '../../Assets/img/home/diner-room.jpg'

import discover1 from '../../Assets/img/discover1.jpg';
import discover2 from '../../Assets/img/discover2.jpg';


const Home = () => {
  return (
    <React.Fragment>

            <Header 
                    text1 = "Welcome"
                    text2 =  "THE TRIANO"
                    background={homeHeader} />
               

            <HomeLayout>
            
                        <TextLeft
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {story}
                                img2 = {chef}/>
                    

                        <section style={{backgroundImage: "url(" + dinerRoom + ")"}} className={classes.Gallery}>
                                THE ROOFTOP
                        </section>

                        <TextRight 
                                title = "OUR MENU" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                
                                img1 = {menu1}
                                img2 = {menu2}
                                img3 = {menu3}
                                img4 = {menu4}/>
                                

                        <section style={{backgroundImage: "url(" + discover1 + ")"}} className={classes.Gallery}>
                                THE ROOFTOP
                        </section>

                        <TextLeft
                              
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {discover1}
                                img2 = {discover2}
                                img3 = {discover1}
                                img4 = {discover2}/>
                        
                        <section style={{backgroundImage: "url(" + discover1 + ")"}} className={classes.Gallery}>
                                THE ROOFTOP
                        </section>
                        
                        <TextRight
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {discover1}
                                img2 = {discover2}/>
                               
                    

            </HomeLayout>


    </React.Fragment>
       
   
  )
}

export default Home;



/*  */