import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../Assets/img/barHeader.jpg';

const Bar = () => {
  return (
    <React.Fragment>
        <Header background={background}
                    text1 = "our"
                    text2= "BAR"/>
    </React.Fragment>
  )
}

export default Bar;