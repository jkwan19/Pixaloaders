import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import ImageDetails from './src/pages/ImageDetails';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pixaloader"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#58a6d6' }
        }}
        >
        <Stack.Screen name="Pixaloader" component={Home} />
        <Stack.Screen name="Details" component={ImageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

