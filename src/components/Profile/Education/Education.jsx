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
import classes from './Education.module.css';

const Education = () => (
  <EuiText>
    <EuiFlexGroup className={classes.Main}>
      <EuiFlexItem>
        <div className={classes.head}>
          <h2>Образование</h2>
          <blockquote>
            <p>
              Получал высшее образование в престижном ВУЗе. Считаю, что всю
              жизнь необходимо учиться и развиваться, чем и помог мне институт
            </p>
          </blockquote>
        </div>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiDescriptionList className={classes.content}>
          <EuiDescriptionListTitle>
            Национальный Исследовательский Технологический Университет
            &quot;МИСиС&quot;
          </EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            2014 - 2018 ИНМиН, Материаловедение и технология новых материалов
          </EuiDescriptionListDescription>
        </EuiDescriptionList>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiText>
);

export default Education;
