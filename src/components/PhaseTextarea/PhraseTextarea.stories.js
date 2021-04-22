
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import PhraseTextarea from "./PhraseTextarea";

function TextControlledInput() {
  const [textInput, setTextInput] = useState("");

  return (
    <PhraseTextarea
      placeholder="Enter here"
      multiline={true}
      number={4}
    />
  )

}

function TextUncontrolledInput() {
  return (
    <PhraseTextarea
      value="roa ambin'ny folo"
      multiline={4}
    />
  )

}

storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('uneditable', () => <TextUncontrolledInput/>)
  .add('editable', () => <TextControlledInput/>) 
