import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Listitem from './ListItem';

storiesOf('Listitem', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Learn Malagasy', () => (
    <View>
      <Listitem text={'Learn Malagasy'} />
    </View>
  ));
