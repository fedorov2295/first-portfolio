import React from 'react';
import classes from './AboutMyself.module.css';
import Education from '../Profile/Education/Education';
import Profile from '../Profile/Profile';
import Skills from '../Profile/Skills/Skills';

function AboutMyself() {
  return (
    <div className={classes.App}>
      <Profile className={classes.Content} />
      <hr className={classes.devide} />
      <Skills />
      <hr className={classes.devide} />
      <Education />
    </div>
  );
}

export default AboutMyself;
