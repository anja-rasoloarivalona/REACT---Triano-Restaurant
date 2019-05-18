import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.css';

const Button = (props) => {
  return (
    <Link className={classes.Button}
            to={props.path}>
        {props.buttonValue}
    </Link>
  )
}

export default Button;
