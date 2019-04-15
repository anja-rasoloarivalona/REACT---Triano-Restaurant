import React from 'react';
import classes from './MenuLayout.css';

const MenuLayout = (props) => {
  return (
    <section className={classes.MenuLayout}>
      {props.children}
    </section>
  )
}

export default MenuLayout;
