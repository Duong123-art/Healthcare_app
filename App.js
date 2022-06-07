import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';

import MyBottomNav from './app/navigations/MyBottomNav';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyBottomNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
