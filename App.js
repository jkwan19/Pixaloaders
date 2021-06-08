import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import ImageDetails from './src/pages/ImageDetails';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Pixaloader" component={Home} />
        <Stack.Screen name="Details" component={ImageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

