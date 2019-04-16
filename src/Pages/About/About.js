import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../Assets/img/aboutHeader.jpg';

const About = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "About"
                    text2= "US"/>
    </React.Fragment>
  )
}

export default About;
