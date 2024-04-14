import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/Home';
import { RootStackParams } from './StackNavigator';
import { Login } from '../screens/Login';

export const BottomMenuTabs = () => {
  const Tab = createMaterialBottomTabNavigator<RootStackParams>();
  return (
    <Tab.Navigator
      labeled={false}
      screenOptions={{
        tabBarColor: '#004E64',
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarBadge: 3,
          tabBarIcon: ({ c }) => (<Mate)
        }}
      />
      <Tab.Screen name="Login" component={Login} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
