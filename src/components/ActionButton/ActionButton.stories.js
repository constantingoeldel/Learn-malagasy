import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import ActionButton from './ActionButton.js';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('ActionButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Learn', () => {
    return (
      <ActionButton onPress={() => alert('clicked learn')}>
        <Text style={styles.learnbtn}>Learn</Text>
        <Image style={styles.vect1} source={require('./Icons/Vect1.png')} />
      </ActionButton>
    );
  })
  .add('Pick', () => (
    <ActionButton onPress={() => alert('clicked Pick')}>
      <Text style={styles.learnbtn}>Pick</Text>
      <Image style={styles.vect1} source={require('./Icons/Vect1.png')} />
    </ActionButton>
  ))
  .add('Correct', () => (
    <ActionButton onPress={() => alert('clicked Correct')}>
      <Text style={styles.correctbtn}>Correct</Text>
      <Image style={styles.vect2} source={require('./Icons/Vect2.png')} />
    </ActionButton>
  ))
  .add('Wrong', () => (
    <ActionButton onPress={() => alert('clicked Wrong')}>
      <Text style={styles.wrongbtn}>Wrong</Text>
      <Image style={styles.vect3} source={require('./Icons/Vect3.png')} />
    </ActionButton>
  ));

const styles = StyleSheet.create({
  learnbtn: {
    color: '#06B6D4',
  },
  correctbtn: {
    color: '#06D440',
  },
  wrongbtn: {
    color: '#D4068E',
  },
  vect1: {
    width: 16,
    height: 16,
  },
  vect2: {
    width: 17.6,
    height: 13.4,
  },
  vect3: {
    width: 14,
    height: 14,
  },
});
