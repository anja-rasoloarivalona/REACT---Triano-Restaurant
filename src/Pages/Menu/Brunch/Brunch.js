import React from 'react';
import classes from './Brunch.css';
import MenuItems from '../MenuItems/MenuItems';

const brunch = () => {
  return (

    <React.Fragment>

    <section className={classes.MenuSection}>

                    <MenuItems 

                    menuTitle = 'Brunch'
                    
                    title1 = 'The 2 Eggs'
                    content1= 'Poached or scrambled. sourdough toast'
                    price1= '23'

                    title2 = 'Huevos Rancheritos'
                    content2= '3 scrambled eggs topped with cheese'
                    price2= '33'

                    title3 = 'Huevos Migas'
                    content3= '3 scrambled eggs with sausage'
                    price3= '15'

                    title4 = 'Crepe Croque Monsieur'
                    content4= 'With ham, cheddar, scallion cream'
                    price4= '27'

                    title5 = 'Cheddar & Spinach Waffles'
                    content5= 'With bacon, tomato cream'
                    price5= '14'                    
                    />
    </section>

    </React.Fragment>
  )
}

export default brunch;
