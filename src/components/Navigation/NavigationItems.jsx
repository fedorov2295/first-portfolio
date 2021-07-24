import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Обо мне
    </NavigationItem>
    <NavigationItem link="/projects">Проекты</NavigationItem>
  </ul>
);

export default NavigationItems;
