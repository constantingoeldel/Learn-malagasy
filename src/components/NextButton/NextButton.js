import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  disabledbtntext: {
    color: '#06B6D4',
  },
  abledbtntext: {
    color: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  btn: {
    // Width hardcoded leads to truncated word Reshuffle
    width: 90,
    margin: 20,
    height: 40,
    paddingTop: 10,
    paddingLeft: 27,
    borderRadius: 30,
    paddingRight: 27,
    paddingBottom: 10,
  },
  ablebtn: {
    backgroundColor: '#06B6D4',
  },
  disablebtn: {
    borderWidth: 1,
    borderColor: '#06B6D4',
    backgroundColor: '#F9F9F9',
  },
});

export default ({disabled, text, onPress}) => {
  return (
    <TouchableHighlight
      onPress={disabled ? () => null : onPress}
      disabled={disabled}
      style={[disabled ? styles.disablebtn : styles.ablebtn, styles.btn]}>
      <Text
        style={[
          styles.text,
          disabled ? styles.disabledbtntext : styles.abledbtntext,
        ]}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};
