import * as React from 'react';
import ActionButton from '../ActionButton/ActionButton.js';
import Vect1 from '../Icons/Vect1.svg';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Listitem({text}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.text}>{text}</Text>
        <ActionButton text="Learn" textColor="#06B6D4">
          <Vect1 />
        </ActionButton>
      </View>
    </SafeAreaView>
  );
}

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
