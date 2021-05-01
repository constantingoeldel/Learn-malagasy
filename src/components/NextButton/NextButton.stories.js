import React from 'react';
import NextButton from './NextButton';
import {storiesOf} from '@storybook/react-native';
import {Text, StyleSheet, View} from 'react-native';

storiesOf('NextButton', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('Addabledbtn', () => (
    <NextButton onPress={() => alert('clicked abled')} disabled={false}>
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
