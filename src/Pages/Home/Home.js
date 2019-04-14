import React from 'react';
import classes from './Home.css';

import Header from '../../components/Header/Header';

import homeBackground from '../../Assets/img/home.jpg';
import discover1 from '../../Assets/img/discover1.jpg';
import discover2 from '../../Assets/img/discover2.jpg';


const Home = () => {
  return (
    <React.Fragment>
            <Header 
                    background={homeBackground}
                    title = "The right place to be"/>

            <section className={classes.Discover}>

                    <div className={classes.DiscoverTextContainer}>
                            <h3 className={classes.DiscoverTextTitle}>Discover</h3>
                            <h3 className={classes.DiscoverTextSubtitle}>OUR STORY</h3>
                            <p className={classes.DiscoverText}>
                                Triano is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.                          
                            </p>
                    </div>
                    <div className={classes.DiscoverGallery}>
                        <img className={classes.DiscoverImg} src={discover1}/>
                        <img className={classes.DiscoverImg} src={discover2}/>
                    </div>
                   
            </section>

    </React.Fragment>
       
   
  )
}

export default Home;



/*  */