import React from 'react';
import { EuiCard, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import classes from './Projects.module.css';
import projectImage1 from '../../images/burger.png';
import projectImage2 from '../../images/SearchingBooks.png';
import projectImage3 from '../../images/dataTable.png';

const Projects = () => (
  <EuiFlexGroup direction="row" gutterSize="s" className={classes.Main}>
    <EuiFlexItem>
      <EuiCard
        layout="vertical"
        image={projectImage1}
        title="Burger-builder"
        description="Заказ кастомно-собранного бургера, с отправкой данных пользователя и заказа на сервер(в качестве сервера в проекте использовал firebase Google Realtime-database).Проект реализован на React с использованием Redux, css-modules. Технологии реализованные в проекте:
        routing,
        react-hooks,
        HighOrderComponent,
        animations,
        css-modules,
        jest,
        git,
        redux,
        promise,
        thunk,
        axios,
        instance,
        eslint.
        Также в процессе переход на Typescript и применение redux-saga."
        href="https://github.com/fedorov2295/Project-Burger"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        layout="vertical"
        image={projectImage2}
        title="Searching bar"
        description="Поисковая строка, начинающая поиск книг через секунду после того как пользователь закончил ввод, либо по нажатию кнопки. Результаты поиску отображаются в виде сниппетов, при нажатии на которые появляется его расширенная версия(с более подробной информацией о книге). Данные забираются по API.
        Технологии реализованные в проекте:
        react-hooks,
        redux,
        git,
        promise,
        css-modules,
        lodash,
        eslint,
        и т.д."
        href="https://github.com/fedorov2295/API-Book-Finder"
      />
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        layout="vertical"
        title="Simple data table"
        image={projectImage3}
        description="Простая таблица данных, с возможностью редактировать строки с данными, менять их порядок, добавлять новые строки. Проект реализован на React, без серверной части(все данные хранятся в local Storage). Технологии реализованные в проекте:
        react-hooks,
        git,
        promise,
        github pages,
        css-modules,
        localStorage,
        eslint,
        и т.д."
        href="https://fedorov2295.github.io/Data-table/"
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Projects;
