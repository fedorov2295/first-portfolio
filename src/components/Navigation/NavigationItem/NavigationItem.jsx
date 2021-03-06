/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Link to={props.link}>{props.children}</Link>
  </li>
);

export default NavigationItem;
