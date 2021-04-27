import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';
export default ToolButton = ({onPress, children = ''}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.btn}>
      <Text>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#06B6D4',
    borderRadius: 100,
    padding: 13,
    width: 40,
    height: 40,
  },
});

ToolButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ToolButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
