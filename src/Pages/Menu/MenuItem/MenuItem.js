import React from "react";
import classes from "./MenuItem.css";

const MenuItem = props => {
  return (
    <li className={classes.ItemContainer}>
      <div>
        <h4 className={classes.ItemTitle}>{props.title}</h4>
        <div className={classes.ItemContent}>{props.content}</div>
      </div>

      <div className={classes.Price}>${props.price}</div>
    </li>
  );
};

export default MenuItem;
