import React from 'react';
import classes from './Drinks.css';

import MenuItems from '../../Menu/MenuItems/MenuItems';



const drinks = () => {
    return (
        <React.Fragment>
            <section className={classes.MenuSection}>
                    <MenuItems 
                        menuTitle = 'Cocktails'
                        
                        title1 = 'Spicy concombre'
                        content1= 'Greenalls Gin, St.Germain, lime juice'
                        price1= '21'

                        title2 = 'Lolita'
                        content2= 'Green Mark Vodka, Sparkling White Wine, grapfruit'
                        price2= '15'

                        title3 = 'Penicillin'
                        content3= 'Famous Grouse Scotch, lemon juice'
                        price3= '14'

                        title4 = 'Midnight in Paris'
                        content4= 'Park VS Cognac, Green Mark Vodka, lemon, orange'
                        price4= '27'

                        title5 = 'Light and Balmy'
                        content5= 'Sailor Jerry rum, lime juice, ginger beer'
                        price5= '14'               
                    />
            </section>
            <section className={classes.MenuSection}>
                    <MenuItems 
                        menuTitle = 'Wine'
                        
                        title1 = 'Chardonnay, Martin Ray'
                        content1= 'Russian River Valley, California'
                        price1= '13'

                        title2 = 'Pinot Grigio'
                        content2= 'Veneto, Italy'
                        price2= '15'

                        title3 = 'Sauvignon Blanc'
                        content3= 'Napa Valley, California'
                        price3= '15'

                        title4 = 'Côte du Rhône, Mont-Redon'
                        content4= 'Côtes du Rhône, France'
                        price4= '27'

                        title5 = 'Bordeaux, Chateau de Sours'
                        content5= 'Bordeaux, France'
                        price5= '14'               
                    />
            </section>
            <section className={classes.MenuSection}>
                    <MenuItems 
                        menuTitle = 'Juice'
                        
                        title1 = 'Orange Slush Punch'
                        content1= 'Glass'
                        price1= '10'

                        title2 = 'Pineapple-Orange Sherbert Punch'
                        content2= 'Glass'
                        price2= '10'

                        title3 = 'Cherry-infused Punch'
                        content3= 'Glass'
                        price3= '13'

                        title4 = 'Sparkling Pear Punch'
                        content4= 'Glass'
                        price4= '15'

                        title5 = 'Water'
                        content5= 'Bottle'
                        price5= '10'               
                    />
            </section>
        </React.Fragment>
    )
}

export default drinks;