import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import LearntPhrases from './LearntPhrases';

storiesOf('LearntPhrases', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('LearntPhrases', () => (
    <View>
      <LearntPhrases />
    </View>
  ));
