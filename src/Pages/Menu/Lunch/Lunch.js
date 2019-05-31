import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import classes from "./Lunch.css";

import background from "../../../Assets/img/menu/menuHeader.jpg";

import mesclun from "../../../Assets/img/menu/mesclun.jpg";
import beef from "../../../Assets/img/menu/beef.jpg";
import lobster from "../../../Assets/img/menu/lobster.jpg";
import salmon from "../../../Assets/img/menu/salmon.jpg";


export default function Lunch() {
  return (
    <React.Fragment>
      <section className={classes.MenuSection}>
        <MenuItems
          menuTitle="Starters"
          title1="French onion soup"
          content1="Gratin with Gruyere Cheese"
          price1="23"
          title2="Escargot"
          content2="In a Parsley and Garlic Butter Sauce"
          price2="33"
          title3="Quiche of the day"
          content3="With Mesclun Salad on the side"
          price3="15"
          title4="Beef Tartar"
          content4="Shallots, Mustard, Chives, Sriracha and Parsley"
          price4="27"
          title5="Mesclun salad"
          content5="Dried Cranberries, Pistachios and a Balsamic Vinaigrette"
          price5="14"
        />
      </section>

      <section className={classes.Parallax}>
        <section className={classes.ParallaxImgLeft}
          style={{ backgroundImage: " url(" + mesclun + ")" }}>
              <span className={classes.ParallaxInerImg}>
                      Mesclun salad
              </span>
        </section>        
        <section className={classes.ParallaxImg}>
          <h3 className={classes.ParallaxTitle}>Our Chef</h3>
          <h3 className={classes.ParallaxSubtitle}>SELECTION</h3>
        </section>
        <section className={classes.ParallaxImgRight}
          style={{ backgroundImage: " url(" + beef + ")" }}>
            <span className={classes.ParallaxInerImg}>
                      Beef Tartar
            </span>
        </section>
          
        
          
      </section>

      <section className={classes.MenuSection}>
        <MenuItems
          menuTitle="Main course"
          title1="Salmon steak"
          content1="Creamy Dill Sauce and a side of Cous Cous with Merguez Sausage"
          price1="30"
          title2="Shrimp risotto"
          content2="Caramelized Fennel, Cherry Tomatoes, Lemon and a Saffron Foam"
          price2="20"
          title3="Pan seared trout"
          content3="In a Roasted Garlic and Herbs de Provençe"
          price3="18"
          title4="Pork medallions"
          content4="Stuffed with Granny Smith Apple and Rosemary"
          price4="25"
          title5="Caribean Lobster tail"
          content5="Brandy Beurre Noir with side of Haricot Verts Sauté"
          price5="53"
        />
      </section>

      <section className={classes.Parallax}>
        <section className={classes.ParallaxImgLeft}
          style={{ backgroundImage: " url(" + lobster + ")" }}>
              <span className={classes.ParallaxInerImg}>
                    Caribean Lobster tail
              </span>
        </section>
          


        <section className={classes.ParallaxImg}>
          <h3 className={classes.ParallaxTitle}>Our Chef</h3>
          <h3 className={classes.ParallaxSubtitle}>SELECTION</h3>
        </section>

        <section  className={classes.ParallaxImgRight}
          style={{ backgroundImage: " url(" + salmon + ")" }}>
              <span className={classes.ParallaxInerImg}>
                  Salmon steak
              </span>
          </section>
         
       
      </section>

      <section className={classes.MenuSection}>
        <MenuItems
          menuTitle="Desserts"
          title1="Crêpe Suzette"
          content1="Orange Butter Sauce and Grand Marnier"
          price1="13"
          title2="Warm thin crust apple tart"
          content2="Apricot Glaze, Almond Paste and Vanilla Ice Cream"
          price2="23"
          title3="Quiche of the day"
          content3="With Mesclun Salad on the side"
          price3="15"
          title4="Dark chocolate mousse"
          content4="Perfumed with Rum Barrilito"
          price4="11"
          title5="Soufflé of the day"
          content5="Banana"
          price5="10"
        />
      </section>
    </React.Fragment>
  );
}
