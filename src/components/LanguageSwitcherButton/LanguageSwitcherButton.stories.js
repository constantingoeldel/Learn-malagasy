import React from 'react';
import Switch from '../Icons/Switch.svg';
import LanguageSwitcherButton from './LanguageSwitcherButton.js';
import {storiesOf} from '@storybook/react-native';
import {View, StyleSheet} from 'react-native';

storiesOf('LanguageSwitcherButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('SwitchLanguage', () => {
    return (
      <LanguageSwitcherButton
        onPress={() => alert('switch language btn is clicked')}>
        <Switch width={16.93} height={13.33} fill="#fff" />
      </LanguageSwitcherButton>
    );
  });
