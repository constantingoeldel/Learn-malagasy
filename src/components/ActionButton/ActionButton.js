import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';
export default ActionButton = ({onPress, children = ''}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  ablebtntext: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    textAlign: 'right',
    fontStyle: 'normal',
    // fontFamily: "Inter",
  },
  btn: {},
});

ActionButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ActionButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
