// import Buttons from './Buttons';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import PhraseTextarea from '../components/PhaseTextarea/PhraseTextarea';

export default function AddScreen({}) {
  return (
    <SafeAreaView>
      <View>
        <Text>I am here for you</Text>
        <Text>The phrase:</Text>
        <PhraseTextarea editable={false} phrase={'I love what I am seeing'} />
      </View>
    </SafeAreaView>
  );
}
