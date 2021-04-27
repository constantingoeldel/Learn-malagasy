import React from 'react';
import Vect1 from '../Icons/Vect1.svg';
import Vect2 from '../Icons/Vect2.svg';
import Vect3 from '../Icons/Vect3.svg';
import ActionButton from './ActionButton.js';
import {storiesOf} from '@storybook/react-native';
import {View, StyleSheet} from 'react-native';

storiesOf('ActionButton', module)
  .addDecorator(getStory => <View style={styels.btnStyle}>{getStory()}</View>)
  .add('Learn', () => {
    return (
      <ActionButton
        onPress={() => alert('clicked learn')}
        text="Learn"
        textColor="#06B6D4">
        <Vect1 width={16} height={16} fill="#06B6D4" />
      </ActionButton>
    );
  })
  .add('Pick', () => (
    <ActionButton
      onPress={() => alert('clicked Pick')}
      text="Pick"
      textColor="#06B6D4">
      <Vect1 width={16} height={16} fill="#06B6D4" />
    </ActionButton>
  ))
  .add('Correct', () => (
    <ActionButton
      onPress={() => alert('clicked Correct')}
      text="Correct"
      textColor="#06D440">
      <Vect2 width={17.6} height={13.4} fill="#06B6D4" />
    </ActionButton>
  ))
  .add('Wrong', () => (
    <ActionButton
      onPress={() => alert('clicked Wrong')}
      text="Wrong"
      textColor="#D4068E">
      <Vect3 width={14} height={14} fill="#06B6D4" />
    </ActionButton>
  ));

const styels = StyleSheet.create({
  btnStyle: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
