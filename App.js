/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Learning from './src/screenNavigation/Learning';
import HomeScreen from './src/screenNavigation/HomeScreen';
import AddScreen from './src/screenNavigation/AddScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ContextProvider} from './src/globalContext/GlobalContext';

const Stack = createStackNavigator();

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Learning" component={Learning} />
          <Stack.Screen name="AddScreen" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
