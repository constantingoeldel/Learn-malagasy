import React from 'react';
import Vect1 from '../../icons/Vect1.svg';
import Vect2 from '../../icons/Vect2.svg';
import Vect3 from '../../icons/Vect3.svg';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Button({onPress, text, textColor}) {
  return (
    <TouchableOpacity style={styles.btnContainerStyle} onPress={onPress}>
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
      {text === 'Learn' || text === 'Pick' ? (
        <Vect1 />
      ) : text === 'Correct' ? (
        <Vect2 />
      ) : text === 'Wrong' ? (
        <Vect3 />
      ) : (
        <Vect1 />
      )}
    </TouchableOpacity>
  );
}

export default Button;

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
