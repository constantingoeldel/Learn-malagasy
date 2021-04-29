import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import HomeScreen from './HomeScreen';

storiesOf('HomeScreen', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List', () => (
    <View>
      <HomeScreen />
    </View>
  ));
