
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('Example', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Jacquit', () => <MyComponent MyText= {'My name is Jacquit.'} />)
  .add('Location.', () => <MyComponent MyText= {'I am from Andilamena.'}/>)
