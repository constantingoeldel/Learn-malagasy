import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, StyleSheet, Image} from 'react-native';
import ActionButton from './ActionButton.js';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('ActionButton', module)
.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
.add('Learn', () => {
    return (
      <ActionButton onPress={alert('clicked learn')} >
        <Text style={styles.learnbtn}>Learn</Text>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="black"/>
        </svg>
        {/* <Image source={require('./Icons/Vector1.svg')}/> */}
      </ActionButton>
    )
  })
  
  .add('Pick', () => (
    <ActionButton onPress={alert('clicked Pick')} >
      <Text style={styles.learnbtn}>Pick</Text>
    </ActionButton>
  ))
  .add('Correct', () => (
    <ActionButton onPress={alert('clicked Correct')} >
      <Text style={styles.correctbtn}>Correct</Text>
    </ActionButton>
  ))
  .add('Wrong', () => (
    <ActionButton onPress={alert('clicked Wrong')} >
      <Text style={styles.wrongbtn}>Wrong</Text>
    </ActionButton>
  ))

const styles = StyleSheet.create({
  learnbtn: {
    color: '#06B6D4',
    paddingRight: 10,
  },
  correctbtn: {
    color: "#06D440",
    paddingRight: 10,
  },
  wrongbtn: {
    color: "#D4068E",
    paddingRight: 10,
  },
})