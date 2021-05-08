import React from 'react';
import ActionButton from '../ActionButton/ActionButton.js';
import Vect1 from '../../icons/Vect1.svg';
import {Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  list: {
    paddingTop: 17,
    paddingLeft: 16,
    paddingRight: 20,
    paddingBottom: 17,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

export default function Listitem({text, onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.list} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        <ActionButton
          text={'Learn'}
          textColor="#06B6D4"
          onPress={onPress}></ActionButton>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
