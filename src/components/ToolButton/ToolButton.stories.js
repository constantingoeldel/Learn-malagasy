import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, StyleSheet} from 'react-native';
import ToolButton from './ToolButton';
import CenterView from '../../../storybook/stories/CenterView';
function Icons() {

  return (
    <ToolButton />
  )
}

storiesOf('ToolButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Addabledbtn', () => (
    <ToolButton onPress={alert('clicked abled')} style={styles.btn}>
      <Icons />
    </ToolButton>
  ))

const styles = StyleSheet.create({
  btn: {
      backgroundColor: '#06B6D4',
      borderRadius: 100,
  }
})