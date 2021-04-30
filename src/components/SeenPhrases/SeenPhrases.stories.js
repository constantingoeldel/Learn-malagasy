import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SeenPhrase from './SeenPhrases';

storiesOf('SeenPhrase', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('SeenPhrase', () => (
    <View>
      <SeenPhrase />
    </View>
  ));
