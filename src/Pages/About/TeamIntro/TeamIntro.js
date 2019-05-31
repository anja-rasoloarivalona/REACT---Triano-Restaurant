import React from 'react';
import classes from './TeamIntro.css';

const teamIntro = () => {
    return (
        <section className={classes.TeamIntro}>
          <div className={classes.TeamIntroTitle}>
            <span>Meet</span>
            <span>our chef</span>
          </div>
          <p>
            Triano is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon’s Exmouth Market. With glazed frontage on
            two sides of the building, overlooking the market and a bustling
            London intersection. With glazed frontage on two sides of the
            building, overlooking the market and a bustling London intersection.
          </p>
        </section>
    )
}

export default teamIntro;
