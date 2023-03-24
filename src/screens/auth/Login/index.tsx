import React from 'react';
import {ImageBackground, StyleSheet, useWindowDimensions} from 'react-native';

import Images from 'themes/Images';
import {
  RNContainer,
  RNTextInput,
  RNView,
  RNText,
  RNImage,
} from '../../../components/core';
import {
  DEFAULT_BORDER_RADIUS,
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_PASSWORD_PLACEHOLDER,
} from '../../../constants/default';

const DEFAULT_SIZE = 25;

enum FocusType {
  none = 0,
  email = 1,
  password = 2,
}

const LoginScreen = () => {
  const {width, height} = useWindowDimensions();
  const [isPasswordHidden, setHiddenPassword] = React.useState<boolean>(true);
  const [isFocus, SetIsFocus] = React.useState<FocusType>(FocusType.none);

  const loginCardWidth = 0.8 * width;
  const loginCardHeight = 0.4 * height;

  const isPasswordFocus = isFocus === 2;
  const isEmailFocus = isFocus === 1;

  const passwordRightIcon = isPasswordHidden
    ? 'eye-outline'
    : 'eye-off-outline';
  const emailBorderColor = isEmailFocus ? 'blue' : 'gray';
  const passwordBorderColor = isPasswordFocus ? 'blue' : 'gray';
  const loginImages = Images.Images.login;

  const onFocus = (type: FocusType) => {
    SetIsFocus(type);
  };

  const onBlur = () => {
    SetIsFocus(FocusType.none);
  };

  const onHiddenPassword = () => {
    setHiddenPassword(() => !isPasswordHidden);
  };

  return (
    <RNContainer>
      <ImageBackground
        style={styles.background}
        source={loginImages.background}
        resizeMode="stretch">
        <RNView
          width={loginCardWidth}
          height={loginCardHeight}
          borderRadius={7}
          alignSelfCenter
          pHorizonal={20}
          style={styles.loginCardShadow}>
          <RNView row pVertical={10}>
            <RNText
              fill
              mTop={5}
              fontSize="SubHeader"
              fontFamilyWeight="Bold"
              color={'black'}>
              Sign In
            </RNText>
            <RNView
              row
              fill
              justifyContent="space-between"
              pVertical={5}
              pHorizonal={5}
              borderWidth={1}
              borderColor={'blue'}
              borderStyle={'dashed'}>
              <RNImage
                src={{uri: loginImages.faceBookIcon}}
                width={DEFAULT_SIZE}
                height={DEFAULT_SIZE}
              />
              <RNImage
                src={{uri: loginImages.googleIcon}}
                width={DEFAULT_SIZE}
                height={DEFAULT_SIZE}
              />
              <RNImage
                src={{uri: loginImages.instagramIcon}}
                width={DEFAULT_SIZE}
                height={DEFAULT_SIZE}
              />
            </RNView>
            <RNView />
          </RNView>
          <RNTextInput
            title={'Email'}
            fill
            fontWeightFamily="Medium"
            fontSize="SubTitle"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            rightIcon={'mail-outline'}
            borderRadius={DEFAULT_BORDER_RADIUS}
            borderWidth={1}
            borderColor={emailBorderColor}
            onFocus={() => onFocus(FocusType.email)}
            onBlur={onBlur}
          />
          <RNTextInput
            title={'Password'}
            fill
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            fontSize="SubTitle"
            fontWeightFamily="Medium"
            rightIcon={passwordRightIcon}
            secureTextEntry={isPasswordHidden}
            onClickIcon={onHiddenPassword}
            borderWidth={1}
            borderRadius={DEFAULT_BORDER_RADIUS}
            borderColor={passwordBorderColor}
            onFocus={() => onFocus(FocusType.password)}
            onBlur={onBlur}
            mBot={10}
          />
          <RNView
            width={50}
            height={50}
            borderRadius={100}
            absolute
            absoluteTop={255}
            absoluteLeft={250}
            backgroundColor={'white'}
          />
        </RNView>
      </ImageBackground>
    </RNContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  loginCardShadow: {
    elevation: 2,
  },
});
