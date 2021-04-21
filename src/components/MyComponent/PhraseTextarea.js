import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function MyComponent({MyText}) {

  return (
    <SafeAreaView >
      <Text style={{fontSize: 10}}>{MyText}</Text>
      <Text style={{fontSize: 10}}>{MyText}</Text>
      <Text style={{fontSize: 10}}>{MyText}</Text>
    </SafeAreaView>
  );
}