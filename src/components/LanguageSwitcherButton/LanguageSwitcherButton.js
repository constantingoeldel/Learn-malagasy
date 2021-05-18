import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  btnContainerStyle: {
    width: 90,
    height: 40,
    padding: 11,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#06B6D4',
  },
  textStyle: {
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: 'normal',
  },
  leftText: {
    paddingRight: 5,
  },
  rightText: {
    paddingLeft: 5,
  },
});

export default function LanguageSwitcherButton({onPress, children}) {
  // renaming "children" to "icon" increases intuitive understanding
  // The text that is displayed should be passed as props
  return (
    <TouchableOpacity style={styles.btnContainerStyle} onPress={onPress}>
      <Text style={[styles.textStyle, styles.leftText]}>EN</Text>
      {children}
      <Text style={[styles.textStyle, styles.rightText]}>MA</Text>
    </TouchableOpacity>
  );
}
