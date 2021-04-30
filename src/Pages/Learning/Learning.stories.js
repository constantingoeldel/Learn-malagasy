import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import Learning from './Learning';

storiesOf('Learning', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Learning', () => (
    <View>
      <Learning />
    </View>
  ));
