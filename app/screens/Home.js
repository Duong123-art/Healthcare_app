import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {height, otherSchedulesData, width} from '../constants/constants';
import {image} from '../assets/Image/ImageRequire';
import {colors} from '../constants/colors';

import MyTextInput from '../components/MyTextInput';
import UpcomingSchedules from '../components/UpcomingSchedules';

const Home = () => {
  const renderOtherSchedules = ({item}) => {
    return (
      <View style={styles.otherSchedulesContainer}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 0.14 * width,
            height: 0.08 * height,
            marginTop: 0.01 * height,
            borderRadius: 0.03 * width,
          }}
        />
        <View style={styles.otherSchedulesItemInfor}>
          <Text style={styles.title}>{item.schedulesTitle}</Text>
          <Text style={styles.doctor}>{item.doctor}</Text>
          <Text
            style={{
              width: 0.27 * width,
              backgroundColor: colors.green_300,
              textAlign: 'center',
              marginTop: 0.02 * height,
              marginLeft: 0.35 * width,
              borderRadius: 0.01 * width,
              fontFamily: 'OpenSans-Regular',
              fontSize: 12,
              color: 'white',
            }}>
            Jan 19, 8.00am
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <View style={styles.header}>
          <Image
            source={{
              uri: image.appLogo,
            }}
            style={styles.appLogo}
            resizeMode={'stretch'}
          />
          <View style={styles.weather}>
            <Text style={styles.weatherText}>Thời tiết hôm nay</Text>
            <View style={styles.temperatureContainer}>
              <Image
                source={{uri: image.temperatureIcon}}
                style={styles.temperatureIcon}
                resizeMode={'stretch'}
              />
              <Text style={styles.temperature}>28°C, Nhiều mây</Text>
            </View>
          </View>
          <Image
            source={{
              uri: image.avatar,
            }}
            style={styles.avatar}
            resizeMode={'stretch'}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 0.03 * height,
          }}>
          <MyTextInput />
        </View>
        <View style={styles.upCommingSection}>
          <Text style={styles.upcomingText}>Cuộc hẹn sắp tới</Text>
          <UpcomingSchedules />
        </View>
        <View style={styles.anotherSchedules}>
          <Text style={styles.upcomingText}>Cuộc hẹn khác</Text>
          <FlatList
            renderItem={renderOtherSchedules}
            data={otherSchedulesData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0.03 * width,
    paddingRight: 0.03 * width,
    paddingTop: 0.03 * width,
    backgroundColor: '#f2fcf2',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  appLogo: {
    width: 0.1 * width,
    height: 0.05 * height,
    borderRadius: 0.03 * width,
    backgroundColor: 'white',
  },

  avatar: {
    width: 0.09 * width,
    height: 0.05 * height,
    borderRadius: 0.03 * width,
    borderWidth: 3,
    borderColor: 'white',
  },

  weather: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  weatherText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    color: '#C4C4C4',
  },

  temperatureContainer: {
    width: 0.354 * width,
    flexDirection: 'row',
  },

  temperature: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    color: colors.green_900,
  },

  temperatureIcon: {
    width: 0.05 * width,
    height: 0.025 * height,
    marginRight: 0.03 * width,
    marginLeft: 0.03 * width,
  },

  upCommingSection: {
    flex: 6,
    paddingLeft: 0.01 * width,
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 0.03 * height,
  },

  upcomingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: colors.green_900,
  },

  anotherSchedules: {
    flex: 3,
    width: 0.95 * width,
    height: 0.6 * height,
    paddingTop: 0.02 * width,
    paddingLeft: 0.03 * width,
    // backgroundColor: 'green',
    marginTop: 0.1 * width,
  },

  otherSchedulesContainer: {
    width: 0.9 * width,
    height: 0.13 * height,
    backgroundColor: 'white',
    marginTop: 0.02 * height,
    borderRadius: 0.03 * width,
    padding: 0.03 * width,
    alignContent: 'center',
    flexDirection: 'row',
  },

  otherSchedulesItemInfor: {
    flex: 1,
    paddingLeft: 0.05 * width,
  },

  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    color: colors.green_900,
  },

  doctor: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 10,
    color: '#C4C4C4',
    marginTop: 0.01 * width,
  },
});
