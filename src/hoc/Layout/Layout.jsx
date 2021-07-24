/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MainHeader from '../../UI/Header/MainHeader';
import Aux from '../Auxilary/Auxilary';

const Layout = (props) => (
  <Aux>
    <MainHeader />
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
