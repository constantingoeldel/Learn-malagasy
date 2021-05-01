import React from 'react';
import Back from '../Icons/back.svg';
import ToolButton from './ToolButton';
import PlusIcon from '../Icons/plus.svg';
import Correct from '../Icons/correct.svg';
import Switch from '../Icons/switchcolor.svg';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Doublecorrect from '../Icons/doublecorrect.svg';

storiesOf('ToolButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('plusbtn', () => (
    <ToolButton onPress={() => alert('clicked PlusIcon')}>
      <PlusIcon width={14} height={14} fill="#000" />
    </ToolButton>
  ))
  .add('correctbtn', () => (
    <ToolButton onPress={() => alert('clicked Correct')}>
      <Correct width={17} height={13} fill="#000" />
    </ToolButton>
  ))
  .add('doublecorrectbtn', () => (
    <ToolButton onPress={() => alert('clicked Doublecorrect')}>
      <Doublecorrect width={23} height={13} fill="#000" />
    </ToolButton>
  ))
  .add('backbtn', () => (
    <ToolButton onPress={() => alert('clicked back')}>
      <Back width={7} height={12} fill="#000" />
    </ToolButton>
  ))
  .add('switch', () => (
    <ToolButton onPress={() => alert('clicked switch')}>
      <Switch width={22} height={22} fill="#000" />
    </ToolButton>
  ));
