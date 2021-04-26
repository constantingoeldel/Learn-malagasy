import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ToolButton from './ToolButton';
import CenterView from '../../../storybook/stories/CenterView';
import PlusIcon from '../Icons/plus.svg';
import Correct  from '../Icons/correct.svg';
import Doublecorrect  from '../Icons/doublecorrect.svg';
import Back from '../Icons/back.svg';
import Switch from '../Icons/switchcolor.svg';

storiesOf('ToolButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('plusbtn', () => (
    <ToolButton onPress={alert('clicked PlusIcon')}>
      <PlusIcon style={StyleSheet.btn} />
    </ToolButton>
  ))
  .add('correctbtn', () => (
    <ToolButton onPress={alert('clicked Correct')}>
      <Correct style={StyleSheet.btn} />
    </ToolButton>
  ))
  .add('doublecorrectbtn', () => (
    <ToolButton onPress={alert('clicked Doublecorrect')}>
      <Doublecorrect style={StyleSheet.btn} />
    </ToolButton>
  ))
  .add('backbtn', () => (
    <ToolButton onPress={alert('clicked back')}>
      <Back style={StyleSheet.btn} />
    </ToolButton>
  ))
  .add('switch', () => (
    <ToolButton onPress={alert('clicked switch')}>
      <Switch style={StyleSheet.btn} />
    </ToolButton>
  ))