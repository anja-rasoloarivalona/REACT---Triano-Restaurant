import React, { Component } from 'react'
import classes from './SideDrawers.css';
import {Link} from 'react-router-dom';



class SideDrawers extends Component {

    state = {
        listOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {listOpen: !prevState.listOpen}
        })
    }


    render() {

        let drawerClass = [classes.List]
        if(this.state.listOpen) {
            drawerClass = [classes.List, classes.Open]
        }

        

        return (
            <section className={classes.SideDrawers}>
                    <div className={classes.Button} onClick={this.drawerToggleClickHandler}>
                        <div className={classes.ButtonSpan} />
                        <div className={classes.ButtonSpan}/>
                        <div className={classes.ButtonSpan}/>
                    </div>
                    
                    <ul className={classes.List} className={drawerClass.join(' ')}>
                        <li>
                            <Link to="/" className={classes.Link}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" className={classes.Link}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/menu" className={classes.Link}>MENU</Link>
                        </li>
                        <li>
                            <Link to="/bar" className={classes.Link}>BAR</Link>
                        </li>
                        <li>
                            <Link to="/rooftop" className={classes.Link}>ROOFTOP</Link>
                        </li>
                        
                        <li>
                            <Link to="/reservation" className={classes.Link}>RESERVATION</Link>
                        </li>
                    </ul>
                
  
        </section>
        )
    }
}



export default SideDrawers

