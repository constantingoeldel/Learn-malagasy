import React from 'react';
import {View} from 'react-native';
import ActionButton from './ActionButton.js';
import {storiesOf} from '@storybook/react-native';

storiesOf('ActionButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('Learn', () => {
    return (
      <ActionButton
        onPress={() => alert('clicked learn')}
        text="Learn"
        textColor="#06B6D4"
      />
    );
  })
  .add('Pick', () => (
    <ActionButton
      onPress={() => alert('clicked Pick')}
      text="Pick"
      textColor="#06B6D4"
    />
  ))
  .add('Correct', () => (
    <ActionButton
      onPress={() => alert('clicked Correct')}
      text="Correct"
      textColor="#06D440"
    />
  ))
  .add('Wrong', () => (
    <ActionButton
      onPress={() => alert('clicked Wrong')}
      text="Wrong"
      textColor="#D4068E"
    />
  ));
