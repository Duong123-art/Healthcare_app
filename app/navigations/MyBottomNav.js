import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Bill from '../screens/Bill';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const MyBottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={20} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Bill"
        component={Bill}
        options={{
          tabBarIcon: () => (
            <Ionicons name="file-tray-full-outline" size={20} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={20} color={'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomNav;

const styles = StyleSheet.create({});
