import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import NextButton from './NextButton';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('NextButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Addabledbtn', () => (
    <NextButton onPress={() => alert('clicked abled')}>
      <Text style={styles.abledbtntext}>Add</Text>
    </NextButton>
  ))
  .add('Adddisabledbtn', () => (
    <NextButton disabled={true}>
      <Text style={styles.disabledbtntext}>Add</Text>
    </NextButton>
  ));

const styles = StyleSheet.create({
  abledbtntext: {
    color: '#FFFFFF',
  },
  disabledbtntext: {
    color: '#06B6D4',
  },
});
