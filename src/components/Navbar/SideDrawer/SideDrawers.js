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

        let drawerClass = [classes.List];
        let spanTop = [classes.ButtonSpan];
        let spanMid= [classes.ButtonSpan];
        let spanBottom = [classes.ButtonSpan];

        if(this.state.listOpen) {
            drawerClass = [classes.List, classes.Open]
            spanTop = [classes.ButtonSpan, classes.SpanTop]
            spanMid = [classes.ButtonSpan, classes.SpanMid]
            spanBottom = [classes.ButtonSpan, classes.SpanBottom]
            
        }

        

        

        return (
            <section className={classes.SideDrawers}>
                    <div className={classes.Button} onClick={this.drawerToggleClickHandler}>
                        <div className={spanTop.join(' ')} />
                        <div className={spanMid.join(' ')}/>
                        <div className={spanBottom.join(' ')}/>
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

