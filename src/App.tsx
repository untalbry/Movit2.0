/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { BottomMenuTabs } from './presentation/routes/BottomMenuNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BottomMenuTabs />
    </NavigationContainer>
  );
};

export default App;
