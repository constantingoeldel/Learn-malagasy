import * as React from 'react';
import { SafeAreaView, TextInput } from 'react-native';

export default function MyComponent() {
  const [phraseTextarea, setPhraseTextarea] = useState("");

  return (
    <SafeAreaView >
      <TextInput 
        // onChangeText={(e) => setPhraseTextarea(e.target.value)} 
      />
    </SafeAreaView>
  );
}