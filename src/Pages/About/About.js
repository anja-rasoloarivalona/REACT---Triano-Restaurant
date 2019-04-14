import React from 'react';
import Header from '../../components/Header/Header';
import homeBackground from '../../Assets/img/home.jpg';

const About = () => {
  return (
    <React.Fragment>
        <Header background={homeBackground}
                    title = "About us"/>
    </React.Fragment>
  )
}

export default About;
