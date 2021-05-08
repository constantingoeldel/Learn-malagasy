import React from 'react';
import {View} from 'react-native';
import SeenPhrase from './SeenPhrases';
import {storiesOf} from '@storybook/react-native';

storiesOf('SeenPhrase', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('SeenPhrase', () => (
    <View>
      <SeenPhrase />
    </View>
  ));
