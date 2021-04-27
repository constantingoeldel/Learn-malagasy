import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({onPress, text, textColor, children}) {
  return (
    <TouchableOpacity style={styles.btnContainerStyle} onPress={onPress}>
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 19,
    paddingRight: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

Button.defaultProps = {
  text: null,
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  text: PropTypes.node,
  onPress: PropTypes.func,
  children: PropTypes.node,
};
