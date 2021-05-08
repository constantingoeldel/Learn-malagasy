import React from 'react';
import Listitem from './ListItem';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('Listitem', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('learn', () => (
    <Listitem text={'learn'} onPress={() => alert('learn is clicked!')} />
  ))
  .add('pick', () => (
    <Listitem text={'pick'} onPress={() => alert('pick is clicked!')} />
  ));
