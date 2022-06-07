import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Bill = () => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1}}
        colors={['#a8ff78', '#78ffd6']}></LinearGradient>
    </View>
  );
};

export default Bill;
