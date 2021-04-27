import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';

export default function ActionButton({onPress = () => {}, children = ''}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    textAlign: 'center',
    fontStyle: 'normal',
    // fontFamily: "Inter",
  },
});

ActionButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ActionButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
