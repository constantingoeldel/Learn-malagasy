import React from 'react';
import {View} from 'react-native';
import ToolButton from './ToolButton';
import Back from '../../icons/back.svg';
import PlusIcon from '../../icons/plus.svg';
import Correct from '../../icons/correct.svg';
import Switch from '../../icons/switchcolor.svg';
import {storiesOf} from '@storybook/react-native';
import Doublecorrect from '../../icons/doublecorrect.svg';

storiesOf('ToolButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('plusbtn', () => (
    <ToolButton onPress={() => alert('clicked PlusIcon')}>
      <PlusIcon />
    </ToolButton>
  ))
  .add('correctbtn', () => (
    <ToolButton onPress={() => alert('clicked Correct')}>
      <Correct />
    </ToolButton>
  ))
  .add('doublecorrectbtn', () => (
    <ToolButton onPress={() => alert('clicked Doublecorrect')}>
      <Doublecorrect />
    </ToolButton>
  ))
  .add('backbtn', () => (
    <ToolButton onPress={() => alert('clicked back')}>
      <Back />
    </ToolButton>
  ))
  .add('switch', () => (
    <ToolButton onPress={() => alert('clicked switch')}>
      <Switch />
    </ToolButton>
  ));
