// components/Task.js
import * as React from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({MyText}) {

  return (
    <SafeAreaView >
      <TextInput value={MyText} style={styles.input} editable = {false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    // font-family: Inter;
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#111827',
    lineHeight: 24,
    fontSize: 20,
    paddingTop: 41,
    paddingBottom: 35,
    marginLeft: 23,
    marginRight: 23,
    marginTop: 15,
    marginBottom: 37,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'center',
  }
})
