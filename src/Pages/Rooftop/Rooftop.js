import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../Assets/img/rooftopHeader.jpg';

const Rooftop = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "Our"
                    text2= "ROOFTOP"/>
    </React.Fragment>
  )
}

export default Rooftop;