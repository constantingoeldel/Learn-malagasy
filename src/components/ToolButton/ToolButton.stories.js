import {storiesOf} from '@storybook/react-native';
import React from 'react';
import ToolButton from './ToolButton';
import PlusIcon from '../Icons/plus.svg';
import Correct from '../Icons/correct.svg';
import Doublecorrect from '../Icons/doublecorrect.svg';
import Back from '../Icons/back.svg';
import Switch from '../Icons/switchcolor.svg';
import {View} from 'react-native';

storiesOf('ToolButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('plusbtn', () => (
    <ToolButton onPress={() => alert('clicked PlusIcon')}>
      <PlusIcon width={14} height={14} fill="#000" />
    </ToolButton>
  ))
  .add('correctbtn', () => (
    <ToolButton onPress={() => alert('clicked Correct')}>
      <Correct width={14} height={14} fill="#000" />
    </ToolButton>
  ))
  .add('doublecorrectbtn', () => (
    <ToolButton onPress={() => alert('clicked Doublecorrect')}>
      <Doublecorrect width={14} height={14} fill="#000" />
    </ToolButton>
  ))
  .add('backbtn', () => (
    <ToolButton onPress={() => alert('clicked back')}>
      <Back width={14} height={14} fill="#000" />
    </ToolButton>
  ))
  .add('switch', () => (
    <ToolButton onPress={() => alert('clicked switch')}>
      <Switch width={14} height={14} fill="#000" />
    </ToolButton>
  ));
