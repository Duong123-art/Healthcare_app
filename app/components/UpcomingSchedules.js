import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {colors} from '../constants/colors';
import {width, height} from '../constants/constants';
import {image} from '../assets/Image/ImageRequire';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';

const UpcomingSchedules = () => {
  return (
    <View>
      <View style={styles.upcomingBgLayer1} />
      <View style={styles.upcomingBgLayer2} />
      <View style={styles.upComingBackground}>
        <View style={styles.upcomingInfor}>
          <Image
            source={{uri: image.upcomingAvatar}}
            style={styles.upcomingAvatar}
            resizeMode={'contain'}
          />
          <View style={styles.nameAndDoctor}>
            <Text style={styles.upcomingName}>Tái khám định kì</Text>
            <Text style={styles.upcomingDoctor}>
              PGS.TS Nguyễn Cao Kiều Oanh
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 0.07 * width,
              height: 0.07 * width,
              borderRadius: 0.2 * width,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 0.15 * width,
            }}>
            <Ionicons name={'call-outline'} size={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.upcomingTime}>
          <Feather name={'clock'} size={15} color={'white'} />
          <Text style={styles.upcomingTimeText}>
            Sun, Jan 19, 8.00am - 10.00am
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UpcomingSchedules;

const styles = StyleSheet.create({
  upComingBackground: {
    backgroundColor: colors.green_500,
    alignSelf: 'center',
    width: 0.92 * width,
    height: 0.2 * height,
    borderRadius: 0.03 * width,
    marginTop: 0.02 * height,
  },

  upcomingBgLayer1: {
    width: 0.72 * width,
    height: 0.07 * height,
    backgroundColor: colors.green_100,
    borderRadius: 0.03 * width,
    position: 'absolute',
    marginLeft: 0.11 * width,
    top: 0.185 * height,
  },

  upcomingBgLayer2: {
    width: 0.82 * width,
    height: 0.07 * height,
    backgroundColor: colors.green_300,
    borderRadius: 0.03 * width,
    position: 'absolute',
    marginLeft: 0.06 * width,
    top: 0.17 * height,
    opacity: 0.6,
  },

  upcomingInfor: {
    height: 0.1 * height,
    alignItems: 'center',
    paddingLeft: 0.07 * width,
    flexDirection: 'row',
  },

  upcomingAvatar: {
    width: 0.08 * width,
    height: 0.05 * height,
    borderRadius: 0.02 * width,
  },

  nameAndDoctor: {
    marginLeft: 0.08 * width,
  },

  upcomingName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    color: 'white',
  },

  upcomingDoctor: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    color: 'white',
  },

  upcomingTime: {
    width: 0.77 * width,
    height: 0.06 * height,
    backgroundColor: colors.green_100,
    marginLeft: 0.07 * width,
    marginTop: 0.015 * height,
    borderRadius: 0.025 * width,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    flexDirection: 'row',
  },

  upcomingTimeText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: 'white',
    marginLeft: 0.03 * width,
  },
});
