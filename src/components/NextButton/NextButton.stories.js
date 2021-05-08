import React from 'react';
import {View} from 'react-native';
import NextButton from './NextButton';
import {storiesOf} from '@storybook/react-native';

storiesOf('NextButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('AddAbledBtn', () => (
    <NextButton
      text={'Add'}
      disabled={false}
      onPress={() => alert('clicked abled')}
    />
  ))
  .add('AddDisabledBtn', () => (
    <NextButton
      text={'Add'}
      disabled={true}
      onPress={() => alert('clicked disabled')}
    />
  ))
  .add('NextBtn', () => (
    <NextButton
      text={'Next'}
      disabled={false}
      onPress={() => alert('clicked Next')}
    />
  ))
  .add('Reshuffle', () => (
    <NextButton
      text={'Reshuffle'}
      disabled={false}
      onPress={() => alert('clicked Reshuffle')}
    />
  ));
