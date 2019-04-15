import React from 'react';

import Header from '../../components/Header/Header';
import MenuLayout from './MenuLAyout/MenuLayout';


import homeBackground from '../../Assets/img/home.jpg';

const Menu = () => {
  return (
    <React.Fragment>
        <Header background={homeBackground}
                    title = "Our menu"/>

        <MenuLayout>
                Menu
        </MenuLayout>
    </React.Fragment>
  )
}

export default Menu;