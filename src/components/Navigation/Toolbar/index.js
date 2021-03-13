import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
