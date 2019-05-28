import React, { Component } from 'react';
import classes from './Reservation.css';
import Header from '../../components/Header/Header';
import background from '../../Assets/img/about/aboutHeader.jpg';

import entry from '../../Assets/img/entry.jpg';
import Parallax from '../../components/UI/Gallery/FullParallax/FullParallax';

import diningRoom from '../../Assets/img/home/dining-room.png';
import rooftop from '../../Assets/img/home/rooftop.jpg';

class Reservation extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }


    render() {
        return (
            <React.Fragment>
                <Header background={background}
                    text1 = "Book"
                    text2= "YOUR TABLE"/>


                <section className={classes.Entry}>
                        <div className={classes.EntryContainer}>
                            <img src={entry} className={classes.EntryImg}/>
                        </div>
                        
                        <div className={classes.Text}>
                            <h3 className={classes.Title}>Reservation</h3>
                            <p className={classes.Para}>
                                Christian Le Squer and his team will be delighted to welcome you at Le Cinq Restaurant. To prepare your event and guarantee you a personalised welcome, we recommend you reserve a table. Le Cinq restaurant is open every day from 12.30 to 2.00pm for lunch, and from 7.00 to 9.30pm for dinner.
                            </p> 
                         <div/>
                                                     
                    </div> 
                     
                </section>

                <Parallax background = {background}
                                  text = "Choose Your table"/>

                <section className={classes.Table}>
                    <div className={classes.TableItem}>
                        <img src={diningRoom} className={classes.TableImg} alt='Table' />
                        <div className={classes.TableTitle}>The Dining Room</div>
                    </div>
                    <div className={classes.TableItem}>
                        <img src={rooftop} className={classes.TableImg} alt='Table' />
                        <div className={classes.TableTitle}>The Rooftop</div>
                    </div>
                    
                </section>

                <section className={classes.Contact}>
                    <div className={classes.ContactContainer}>
                        <div className={classes.ContactTitle}>Contact</div>
                        <div className={classes.ContactItem}>
                                <span className={classes.ContactItemContent}><b>Tel : </b>+1 514 1234 123</span>
                                <span className={classes.ContactItemContent}><b>E-mail : </b>triano_restaurant@mymail.com</span>
                                <span className={classes.ContactItemContent}><b>Address : </b>54 Avenue Colin, Montréal, QC CANADA</span>
                        </div>
                    </div>
                        
                </section>
            </React.Fragment>

        )
    }
}

export default Reservation;
