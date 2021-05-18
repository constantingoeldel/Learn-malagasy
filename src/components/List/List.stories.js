import React from 'react';
import List from './List';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('List', module)
  // When I open this story on the phone, Storybook crashes (seems to have something to do with redux)
  // The list items should use a divider between them
  .addDecorator(story => <View>{story()}</View>)
  .add('List', () => (
    <View>
      <List />
    </View>
  ));
