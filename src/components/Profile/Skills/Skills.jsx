/* eslint-disable no-unused-vars */
import React from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

import {
  EuiText,
  EuiDescriptionList,
  EuiFlexItem,
  EuiFlexGroup,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
} from '@elastic/eui';
import classes from './Skills.module.css';

const mainSkills = [
  {
    title: 'Web-разработка',
    description: 'JavaScript(ES6, ES5), Typescript(базовый)',
  },
  {
    title: 'Frontend',
    description: 'HTML, CSS, CSS-modules, Styled components, React, Redux',
  },
  {
    title: 'React',
    description: 'Routing, react-redux, thunk, hooks, HOC, axios',
  },
];

const Skills = () => (
  <EuiText className={classes.Main}>
    <EuiFlexGroup>
      <EuiFlexItem>
        <h2>Навыки</h2>
        <blockquote>
          <p>
            Изучал Web-разработку с помощью общедоступных ресурсов, таких
            как:MDN, Learnjavascript, udemy, coursera. Отрабатывал полученные
            знания на собственных проектах, и на сайтах codewars, css-battle.
          </p>
        </blockquote>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiDescriptionList listItems={mainSkills} />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiDescriptionList>
          <EuiDescriptionListTitle>Soft skills</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            Знание английского языка(С1 - Продвинутый), ответственность, желание
            учится и развиваться, граммотность
          </EuiDescriptionListDescription>
          <EuiDescriptionListTitle>Дополнительно</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            JEST, Git, lodash, eslint
          </EuiDescriptionListDescription>
        </EuiDescriptionList>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiText>
);

export default Skills;
