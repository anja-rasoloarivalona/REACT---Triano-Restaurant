import React from 'react';
import classes from './Top.css';

const Top = () => {
  return (
    <section className={classes.Top}>
        <div className={classes.Adress}>
            54 Avenue Colin, Montréal, QC CANADA
        </div>
        <div className={classes.TitleContainer}>
            <h1 className={classes.Title}>Triano</h1>
            <h4 className={classes.Subtitle}>ALWAYS DELICIOUS</h4>
        </div>
        <div className={classes.Contact}>
            <div>
                +1 514 123 1234
            </div>
            <div>
                triano_restaurant@mymail.com
            </div>
        </div>
</section>
  )
}

export default Top; 
