import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const screens = {
  Login: LoginScreen,
  Home: Home,
};

const renderScreen = () => {
  const router = Object.keys(screens).map(key => {
    return <Stack.Screen key={key} name={key} component={screens[key]} />;
  });
  return router;
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <>{renderScreen()}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
