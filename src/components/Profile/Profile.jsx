import React from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import { EuiDescriptionList, EuiSpacer, EuiText } from '@elastic/eui';
import Slider from '../../UI/Slider/Slider';
import classes from './Profile.module.css';

const personalInfo = [
  {
    title: 'ТЕЛЕФОН:',
    description: '+7 (977) 935-64-77',
  },
  {
    title: 'EMAIL:',
    description: 'fedorov.2295@gmail.com',
  },
  {
    title: 'АДРЕС:',
    description: 'г. Москва, ул. Костромская, д.12А',
  },
];

const Profile = () => (
  <div className={classes.Main}>
    <Slider className={classes.avatar} />
    <EuiText className={classes.profile}>
      <h1>Привет, я Федоров Сергей Денисович</h1>
      <p>
        Я frontend - разработчик, живу в городе Москва. На данный момент
        занимаюсь изучением и погружением в тонкости JavaScript.
        <br /> Ищу работу в хорошей компании, с хорошим коллективом и сильными
        специалистами для дальнейшего развития.
      </p>
      <EuiSpacer size="l" />
      <EuiDescriptionList
        listItems={personalInfo}
        type="row"
        align="left"
        compressed
      />
    </EuiText>
  </div>
);

export default Profile;
