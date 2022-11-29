import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import RaceScreen from '../../screens/RaceScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'RaceScreen'} component={RaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
