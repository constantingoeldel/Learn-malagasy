import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToolButton = ({onPress, children = ''}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn}>
      {children}
    </TouchableHighlight>
  );
};
