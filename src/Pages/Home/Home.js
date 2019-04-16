import React from 'react';
import classes from './Home.css';

import Header from '../../components/Header/Header';
import HomeLayout from '../../Pages/Home/HomeLayout/HomeLayout';
import TextLeft from '../../components/UI/TextLeft/TextLeft';
import TextRight from '../../components/UI/TextRight/TextRight';

import homeBackground from '../../Assets/img/test3.jpg';


import home from '../../Assets/img/test.jpg';

import chef1 from '../../Assets/img/home/chef-1.JPG';
import chef2 from '../../Assets/img/home/chef-2.jpg';

import discover1 from '../../Assets/img/discover1.jpg';
import discover2 from '../../Assets/img/discover2.jpg';


const Home = () => {
  return (
    <React.Fragment>

            <Header 
                    text1 = "Welcome"
                    text2 =  "THE TRIANO"
                    background={homeBackground} />
               

            <HomeLayout>
            
                        <TextLeft
                                twoImg
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {chef1}
                                img2 = {chef2}/>
                    

                        <section style={{backgroundImage: "url(" + home + ")"}} className={classes.Gallery}>
                                THE ROOFTOP
                        </section>

                        <TextRight 
                                title = "OUR MENU" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                
                                img1 = {discover1}
                                img2 = {discover2}
                                img3 = {discover1}
                                img4 = {discover2}/>
                                

                        <section style={{backgroundImage: "url(" + home + ")"}} className={classes.Gallery}>
                                THE ROOFTOP
                        </section>

                        <TextLeft
                              
                                title = "OUR STORY" 
                                text = "Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection."
                                img1 = {discover1}
                                img2 = {discover2}
                                img3 = {discover1}
                                img4 = {discover2}/>
                        
                        <section style={{backgroundImage: "url(" + home + ")"}} className={classes.Gallery}>
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