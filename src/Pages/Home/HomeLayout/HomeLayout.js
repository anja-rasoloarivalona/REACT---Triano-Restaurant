import React from 'react';
import classes from './Layout.css';

const HomeLayout = (props) => {
  return (
    <section className={classes.HomeLayout}>
      {props.children}
    </section>
  )
}

export default HomeLayout;