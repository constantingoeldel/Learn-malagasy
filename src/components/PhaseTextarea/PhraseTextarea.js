import React, {useState} from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';

export default function PhraseTextarea({mytext}) {  
  return (
    <SafeAreaView >
      <TextInput 
        style={styles.input} 
        // onChangeText={text => setTextInput(text)} 
        value={mytext}
        // editable = {true}
        // placeholder="Enter here" 
      />
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

