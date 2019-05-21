import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import classes from './Diner.css';
import background from '../../../Assets/img/menu/menuHeader.jpg';

export default function Diner() {

  return (

    <React.Fragment>

    <section className={classes.MenuSection}>

                    <MenuItems 

                    menuTitle = 'Starters'
                    
                    title1 = 'Caviar'
                    content1= 'Royal Osetra Caviar'
                    price1= '121'

                    title2 = 'Kampachi'
                    content2= 'Kampachi Sashimi, pink Peppercorn Pickels'
                    price2= '29'

                    title3 = 'Salmon'
                    content3= 'Salmon Sashimi'
                    price3= '35'

                    title4 = 'Lobster'
                    content4= 'Baked Lobster, Butternut Squash Manicotti'
                    price4= '127'

                    title5 = 'Octopus'
                    content5= 'Seared Octopus, Tomatillo Salsa, Red Wine'
                    price5= '14'                    
                    />
    </section>
            

                  <section className={classes.Parallax}>
                      <section className={classes.ParallaxImgLeft}  style={{backgroundImage: " url(" + background + ")"}}/>
                      <section className={classes.ParallaxImg}>
                          <h3 className={classes.ParallaxTitle}>Our Chef</h3>
                          <h3 className={classes.ParallaxSubtitle}>SELECTION</h3>
                      </section>
                      <section className={classes.ParallaxImgRight} style={{backgroundImage: " url(" + background + ")"}}/>
                  </section>

    <section className={classes.MenuSection}>
                    <MenuItems 
                    menuTitle = 'Main course'
                    
                    title1 = 'Dover Sole'
                    content1= 'Sautéed Dover Sole, Almonds, Morels'
                    price1= '30'

                    title2 = 'Shrimp risotto'
                    content2= 'Caramelized Fennel, Cherry Tomatoes, Lemon and a Saffron Foam'
                    price2= '29'

                    title3 = 'Filet Mignon'
                    content3= 'Pan Roasted Filet Mignon'
                    price3= '41'

                    title4 = 'Pork medallions'
                    content4= 'Stuffed with Granny Smith Apple and Rosemary'
                    price4= '25'

                    title5 = 'Caribean Lobster tail'
                    content5= 'Brandy Beurre Noir with side of Haricot Verts Sauté'
                    price5= '53'                    
                    />
    </section>

                  <section className={classes.Parallax}>
                      <section className={classes.ParallaxImgLeft}  style={{backgroundImage: " url(" + background + ")"}}/>

                      <section className={classes.ParallaxImg}>
                          <h3 className={classes.ParallaxTitle}>Our Chef</h3>
                          <h3 className={classes.ParallaxSubtitle}>SELECTION</h3>
                      </section>

                      <section className={classes.ParallaxImgRight} style={{backgroundImage: " url(" + background + ")"}}/>
                  </section>

    <section className={classes.MenuSection}>

                    <MenuItems 
                    menuTitle = 'Desserts'
                    
                    title1 = 'Corn Hibiscus'
                    content1= 'Hibiscus Meringue'
                    price1= '15'

                    title2 = 'Warm thin crust apple tart'
                    content2= 'Apricot Glaze, Almond Paste and Vanilla Ice Cream'
                    price2= '23'

                    title3 = 'Strawberry'
                    content3= 'Red Wine-Strawberry, Yogurt Sorbet'
                    price3= '15'

                    title4 = 'Dark chocolate mousse'
                    content4= 'Perfumed with Rum Barrilito'
                    price4= '11'

                    title5 = 'Apple'
                    content5= 'Brown Butter Mouse, Apple Confit'
                    price5= '10'                    
                    />
    </section>

    </React.Fragment>
  )
}
