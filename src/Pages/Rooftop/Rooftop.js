import React from 'react';
import classes from './Rooftop.css';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import background from '../../Assets/img/rooftop/rooftopHeader.jpg';
import rooftop from '../../Assets/img/rooftop/rooftop.jpg';

import TextLeft from '../../components/UI/TextLeft/TextLeft';

const Rooftop = () => {
  return (
    <React.Fragment>

        <Header background={background}
                text1= 'Our'
                text2= 'ROOFTOP'
                />

        <section className={classes.Intro}>
          
                  <img src={rooftop} className={classes.IntroImg} alt='rooftop'/>
           
            <div className={classes.IntroTextContainer}>
                <div className={classes.IntroTitle}>
                    <span>The</span>
                    <span>Rooftop Lounge</span>
                </div>
                <p>
                Our Rooftop Lounge is Montreal's largest outdoor Rooftop Garden and Fully enclosed Penthouse Lounge. One floor is fully enclosed. And our rooftop garden is open to the sky. We do have large umbrellas for those sunny or rainy days and is partially heated on colder nights.
                </p>

                <Button 
                path='/reservation'
                buttonValue='Book a table'/>

            </div>

            
        </section>
    </React.Fragment>
  )
}

export default Rooftop;