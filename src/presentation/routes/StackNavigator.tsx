import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home.tsx';
import { StartUp } from '../screens/StartUp.tsx';

export type RootStackParams = {
  StartUp: undefined;
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
      {/* <Stack.Screen name="Product" component={ProductScreen} /> */}
      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};
