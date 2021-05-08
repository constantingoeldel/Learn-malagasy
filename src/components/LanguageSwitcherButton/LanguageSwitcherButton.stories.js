import React from 'react';
import {View} from 'react-native';
import Switch from '../../icons/switch.svg';
import {storiesOf} from '@storybook/react-native';
import LanguageSwitcherButton from './LanguageSwitcherButton.js';

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
