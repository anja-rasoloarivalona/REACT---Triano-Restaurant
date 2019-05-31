import React from 'react';
import classes from './Header.css';
import Main from './Main/Main';

import { Spring } from 'react-spring/renderprops';

const Header = (Myprops) => {
  return (
    <Spring
        from={{ marginTop: - 100}}
        to={{ marginTop: 0}}
        config={{duration: 300}}
    >
      {props => (
        <div style={props} className={classes.Header}>
            <header  
                className={classes.Header}
                style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + Myprops.background + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        }}>

                <Main text1={Myprops.text1}
                      text2={Myprops.text2} />
                

            </header>
        </div>
            
      )}
        
    </Spring>
    
  )
} 

export default Header;
