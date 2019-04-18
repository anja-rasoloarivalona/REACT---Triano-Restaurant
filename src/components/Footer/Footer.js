import React from 'react';
import classes from './Footer.css';
import {Link} from 'react-router-dom';
import logo from '../../Assets/img/logo.png';

import github from '../../Assets/icon/SVG/github.svg';
import linkedin from '../../Assets/icon/SVG/linkedin.svg';
import briefcase from '../../Assets/icon/SVG/briefcase.svg';
import ReactSVG from 'react-svg';


const Footer = () => {

    return (

      <footer className={classes.Footer}>

          <h3 className={classes.Triano}>The Triano</h3>

          <div className={classes.SiteMap}>
                  <div>Site Map</div>
                  <ul className={classes.List}>
                      <li>
                          <Link to="/" className={classes.Link}>Home</Link>
                      </li>
                      <li>
                          <Link to="/menu" className={classes.Link}>Menu</Link>
                      </li>
                      <li>
                          <Link to="/drinks" className={classes.Link}>Drinks</Link>
                      </li>
                      <li>
                          <Link to="/rooftop" className={classes.Link}>Rooftop</Link>
                      </li>
                      <li>
                          <Link to="/reservation" className={classes.Link}>Reservation</Link>
                      </li>
                </ul>
                <div>Contact: +1 514 999 999</div>

                <div className={classes.Media}>
                      
                          <Link to="/">
                            <ReactSVG src={github} className={classes.Icon} />
                          </Link>
                               
                          <Link to="/">
                            <ReactSVG src={linkedin} className={classes.Icon}/>
                          </Link>
                      
                          <Link to="/">
                            <ReactSVG src={briefcase} className={classes.Icon}/>
                          </Link>
                      
                </div>
            </div>

          <div className={classes.Opening}>
              <div className={classes.OpeningTitle}>Opening Hours</div>
              <ul className={classes.Day}>
                    <li>Monday:</li>
                    <li>Tuesday: </li>
                    <li>Wednesday: </li>
                    <li>Thursday: </li>
                    <li>Friday: </li>
                    <li>Saturday: </li>
                    <li>Sunday: </li>
              </ul>
              <ul className={classes.Hour}>
                  <li>12am - 10pm</li>
                  <li>12am - 10pm</li>
                  <li>12am - 10pm</li>
                  <li>12am - 10pm</li>
                  <li>12am - 10pm</li>
                <li>12am - 10pm</li>
                <li>12am - 10pm</li>
              </ul>
          </div>
          <div className={classes.Adress}>
              <div className={classes.AdressTitle}>We are waiting for you</div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.402344006843!2d-73.59314168490447!3d45.52210843759938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bd44cc54629%3A0xb492e993e0940328!2s4890+Boul+St-Laurent%2C+Montr%C3%A9al%2C+QC+H2T+1R5!5e0!3m2!1sfr!2sca!4v1553553953457" frameBorder="0"   allowFullScreen></iframe>
          </div>
     
      </footer>
    )
}


export default Footer;




