import React from 'react';
import classes from './HappyHour.css';

import MenuItems from '../../Menu/MenuItems/MenuItems';

const happyHour = () => {
    return (
        <React.Fragment>

            <section className={classes.Intro}>
                <div><i>Join us for Happy Hours Specials at Triano's Rooftop</i></div>
                <div> Monday-Friday 4PM-7PM </div>
            </section>

            <section className={classes.MenuSection}>
                    <MenuItems 
                        menuTitle = 'Food'
                        
                        title1 = 'Hummus plate'
                        content1= 'Pita and Olives'
                        price1= '10'

                        title2 = 'Chicken strips'
                        content2= 'French house made, Honey Mustard'
                        price2= '15'

                        title3 = 'Mini Chicken Tacos'
                        content3= 'Pico de Gallo, Sour Cream, Guacamole'
                        price3= '14'

                        title4 = 'Teen Burger'
                        content4= 'Caramelized Onions, Potato Brun'
                        price4= '14'

                        title5 = 'Daddy Burger'
                        content5= 'Cheese, Salmon, salad'
                        price5= '14'               
                    />
            </section>
            <section className={classes.MenuSection}>
                    <MenuItems 
                        menuTitle = 'Drinks'
                        
                        title1 = 'White Sangria'
                        content1= 'Glass'
                        price1= '13'

                        title2 = 'Beers'
                        content2= 'Corona, Heineken, Bud Light'
                        price2= '7'

                        title3 = 'Wines'
                        content3= 'Chardonnay, Merlot'
                        price3= '15'

                        title4 = 'Well Cocktails'
                        content4= 'Vodka, Gin, Rum, Tequila'
                        price4= '14'

                        title5 = 'Sparkling Rose'
                        content5= 'Glass'
                        price5= '14'               
                    />
            </section>
        </React.Fragment>
    )
}

export default happyHour;