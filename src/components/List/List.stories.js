import React from 'react';
import List from './List';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('List', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List', () => (
    <View>
      <List />
    </View>
  ));
