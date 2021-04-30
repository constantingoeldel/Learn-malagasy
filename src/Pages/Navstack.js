import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Learning from './Learning/Learning';
import HomeScreen from './HomeScreen/HomeScreen';
const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Learning" component={Learning} />
    </Stack.Navigator>
  );
};
export default NavStack;
