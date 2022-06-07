import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {height, width} from '../constants/constants';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';

const MyTextInput = () => {
  return (
    <View
      style={{
        width: 0.95 * width,
        backgroundColor: 'white',
        borderRadius: 0.03 * width,
        paddingLeft: 0.03 * width,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Ionicons name="search-outline" size={20} color={colors.green_100} />
      <TextInput
        style={{
          width: 0.7 * width,
          height: 0.06 * height,
          fontFamily: 'OpenSans-Light',
          fontSize: 12,
          marginLeft: 0.03 * width,
          color: '#C4C4C4',
        }}
        placeholder={'Tìm lịch hẹn của bạn'}
      />
    </View>
  );
};

export default MyTextInput;
