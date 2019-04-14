import React from 'react';
import classes from './HomeLayout.css';

const HomeLayout = (props) => {
  return (
    <section className={classes.HomeLayout}>
      {props.children}
    </section>
  )
}

export default HomeLayout;