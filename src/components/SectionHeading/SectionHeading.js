import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

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

export default function SectionHeading({text}) {
  // This is not the section heading but the main header of the app, this would be the correct element: https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEjoxoV3NBCmOHSQHni7hU2%2FMalagasy-App%3Fnode-id%3D13%253A206
  return (
    <SafeAreaView>
      <Text style={styles.textHeader}>{text}</Text>
    </SafeAreaView>
  );
}
