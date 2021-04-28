import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';

export default NextButton = ({onPress = () => {}, children = '', disabled}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      style={disabled ? styles.disablebtn : styles.ablebtn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    fontStyle: 'normal',
    // fontFamily: "Inter",
  },
  ablebtn: {
    width: 90,
    margin: 20,
    height: 40,
    paddingTop: 10,
    paddingLeft: 27,
    borderRadius: 30,
    paddingRight: 27,
    paddingBottom: 10,
    backgroundColor: '#06B6D4',
  },
  disablebtn: {
    width: 90,
    height: 40,
    margin: 20,
    paddingTop: 10,
    borderWidth: 1,
    paddingLeft: 27,
    borderRadius: 30,
    paddingRight: 27,
    paddingBottom: 10,
    borderColor: '#06B6D4',
    backgroundColor: '#F9F9F9',
  },
});

NextButton.defaultProps = {
  children: null,
  onPress: () => {},
};

NextButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
