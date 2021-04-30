import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function SectionHeading({text}) {
  return (
    <SafeAreaView>
      <Text style={styles.textHeader}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 36,
    color: '#06B6D4',
    paddingRight: 160,
    paddingLeft: 22,
    paddingTop: 14,
    paddingBottom: 11,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
});
