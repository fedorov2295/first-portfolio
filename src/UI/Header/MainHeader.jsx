import React from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems';
import classes from './MainHeader.module.css';

const MainHeader = () => (
  <header className={classes.header}>
    <div className={classes.logo}>
      <p>
        Fedo<strong className={classes.RLetter}>r</strong>ov
      </p>
    </div>
    <nav className={classes.navLinks}>
      <NavigationItems />
    </nav>
  </header>
);

export default MainHeader;
