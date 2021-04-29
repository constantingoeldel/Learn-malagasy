/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';
import Learning from './src/Pages/Learning/Learning';
import HomeScreen from './src/Pages/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

// const App = (Node = () => {
const App = (Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <HomeScreen />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Learning" component={Learning} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
