import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import React, { useState } from 'react';

import {
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiText,
} from '@elastic/eui';
import { SocialIcon } from 'react-social-icons';
import classes from './Footer.module.css';

const MyFooter = () => {
  const [showBar, setShowBar] = useState(true);

  let bottomBar;
  if (showBar) {
    bottomBar = (
      <EuiBottomBar>
        <EuiFlexGroup justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="s">
              <EuiFlexItem grow={false}>
                <SocialIcon
                  url="https://github.com/fedorov2295"
                  bgColor="white"
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <SocialIcon url="https://www.instagram.com/hey_ferg/" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <SocialIcon url="https://vk.com/sergei_fedoroff" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <SocialIcon url="https://www.facebook.com/sergei.fedorov.1048/" />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText color="ghost">Этот сайт не собирает данные о Вас</EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              color="ghost"
              iconType="cross"
              onClick={() => setShowBar((show) => !show)}
            >
              Скрыть
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiBottomBar>
    );
  } else {
    bottomBar = (
      <EuiButton
        className={classes.bottomButton}
        onClick={() => setShowBar((show) => !show)}
      >
        Показать
      </EuiButton>
    );
  }

  return <div>{bottomBar}</div>;
};

export default MyFooter;
