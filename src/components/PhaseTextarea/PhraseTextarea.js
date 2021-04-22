import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';

export default function MyComponent({MyText}) {
  const [phraseTextarea, setPhraseTextarea] = useState("");

  return (
    <SafeAreaView >
      <TextInput onChangeText={(evt) => setPhraseTextarea(evt.target.value)} />
    </SafeAreaView>
  );
}