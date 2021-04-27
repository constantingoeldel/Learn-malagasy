import React from 'react';
import Vect1 from '../Icons/Vect1.svg';
import Vect2 from '../Icons/Vect2.svg';
import Vect3 from '../Icons/Vect3.svg';
import ActionButton from './ActionButton.js';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {Text, StyleSheet} from 'react-native';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('ActionButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Learn', () => {
    return (
      <ActionButton onPress={() => alert('clicked learn')}>
        <Text style={styles.learnbtn}>Learn</Text>
        <Vect1 width={16} height={16} fill="#06B6D4" />
      </ActionButton>
    );
  })
  .add('Pick', () => (
    <ActionButton onPress={action('clicked Pick')}>
      <Text style={styles.learnbtn}>Pick</Text>
      <Vect1 width={16} height={16} fill="#06B6D4" />
    </ActionButton>
  ))
  .add('Correct', () => (
    <ActionButton onPress={action('clicked Correct')}>
      <Text style={styles.correctbtn}>Correct</Text>
      <Vect2 width={17.6} height={13.4} fill="#06B6D4" />
    </ActionButton>
  ))
  .add('Wrong', () => (
    <ActionButton onPress={action('clicked Wrong')}>
      <Text style={styles.wrongbtn}>Wrong</Text>
      <Vect3 width={14} height={14} fill="#06B6D4" />
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
});
