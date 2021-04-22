
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextarea from "./PhraseTextarea";


storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Jacquit', () => <PhraseTextarea MyText= {"roa ambin'ny folo"} />)
