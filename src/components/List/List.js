import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Listitem from '../ListItem';

export default function Button({onPress = () => {}, children}) {
  return (
    <View>
      <Listitem />
    </View>
  );
}

Button.defaultProps = {
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
