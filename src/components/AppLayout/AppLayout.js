import React from 'react';
import classes from './AppLayout.css';

const Layout = (props) => {
  return (
    <section className={classes.Layout}>
      {props.children}
    </section>
  )
}

export default Layout;
