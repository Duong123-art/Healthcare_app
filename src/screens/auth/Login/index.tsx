import React from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Button,
} from 'react-native';

import {IMAGES} from '../../../assets/images';
const LoginScreen = () => {
  const {width, height} = Dimensions.get('screen');

  const onLogin = () => {};
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImageView}
        source={IMAGES.login.background}
        resizeMode="stretch">
        <View
          style={{
            ...styles.loginSectionCard,
            width: 0.8 * width,
            height: 0.4 * height,
            borderColor: colors.gray_100,
            padding: 10,
            flexDirection: 'column',
          }}>
          <Icon name="search" />
          <View style={{flexDirection: 'row', flex: 2, alignItems: 'center'}}>
            <Text
              style={{
                flex: 1,
                fontSize: 24,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Sign in
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '40%',
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={{
                  uri: IMAGES.login.googleIcon,
                }}
              />
              <Image
                style={{width: 25, height: 25}}
                source={{
                  uri: IMAGES.login.faceBookIcon,
                }}
              />
              <Image
                style={{width: 25, height: 25}}
                source={{
                  uri: IMAGES.login.instagramIcon,
                }}
              />
            </View>
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <BaseTextField
              placeholder={'Enter your email'}
              title={'Email'}
              isHiddenTitle={true}
            />
            <BaseTextField
              placeholder={'Enter your password'}
              title={'Password'}
              isHiddenTitle={true}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              marginHorizontal: 20,
            }}>
            <Button title="Login" onPress={onLogin} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginSectionCard: {
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: 'black',
    elevation: 2,
  },
});
