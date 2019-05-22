import React, { Component } from 'react'
import classes from './Rooftop.css';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Parallax from '../../components/UI/Gallery/FullParallax/FullParallax';

import background from '../../Assets/img/rooftop/rooftopHeader.jpg';
import rooftop from '../../Assets/img/rooftop/rooftop.jpg';

import TextLeft from '../../components/UI/TextLeft/TextLeft';




class Rooftop extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }


    render() {
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
    
            <Parallax background={background}
                      text="Our events"/>
    
    
            <section className={classes.Event}>
              <div className={classes.EventContainer}>
    
                  <div className={classes.EventItem}>
                        <div className={classes.EventTitle}>
                            Brunch Buffet
                        </div>
                        <div className={classes.EventDay}> 
                            Saturdays & Sundays
                        </div>
                        <div className={classes.EventHour}>
                            <i>10am-4pm</i>
                        </div>
                        <Button 
                            path='/menu/brunch'
                            buttonValue='Learn more'/>
                  </div>
    
                  <div className={classes.EventItem}>
                        <div className={classes.EventTitle}>
                            Happy Hour
                        </div>
                        <div className={classes.EventDay}> 
                            Monday-Friday
                        </div>
                        <div className={classes.EventHour}>
                            <i>4pm-7pm</i>
                        </div>
                        <Button 
                            path='/bar/happyHour'
                            buttonValue='Learn more'/>
                  </div>
              </div>
    
            </section>
        </React.Fragment>
        )
    }
}


export default Rooftop;