import React from 'react';
import classes from './MenuItems.css';
import MenuItem from '../MenuItem/MenuItem';

const MenuItems = (props) => {
  return (
<React.Fragment>
    <h3 className={classes.Title}>{props.menuTitle}</h3>

    <ul className={classes.List}>
        <MenuItem 
            title = {props.title1}
            content={props.content1}
            price={props.price1}/>
        
        <MenuItem 
            title = {props.title2}
            content={props.content2}
            price={props.price2}/>
        
        <MenuItem 
            title = {props.title3}
            content={props.content3}
            price={props.price3}/>
        
        <MenuItem 
            title = {props.title4}
            content={props.content4}
            price={props.price4}/>
        
        <MenuItem 
            title = {props.title5}
            content={props.content5}
            price={props.price5}/>
    </ul>

    </React.Fragment>
  )
}

export default MenuItems;
