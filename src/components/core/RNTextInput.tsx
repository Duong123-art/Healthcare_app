import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

import {Fonts} from 'themes';
import {RNView, RNText, RNPressable} from '../core';
export interface ITextInputProps extends TextInputProps {
  title?: String;
  mTop?: Number;
  mBot?: Number;
  fill?: Boolean;
  flex?: Number;
  fontWeightFamily?: 'Regular' | 'Light' | 'Medium' | 'SemiBold' | 'Bold';
  fontSize?:
    | 'Header'
    | 'SubHeader'
    | 'Title'
    | 'SubTitle'
    | 'Text'
    | 'SmallText';
  sizeOfIcon?: 'Large' | 'Medium' | 'Small' | 'VerySmall';
  leftIcon?: String;
  rightIcon?: String;
  iconColor?: String;
  mHorizontal?: Number;
  mVerTical?: Number;
  borderRadius?: Number;
  borderColor?: String;
  borderWidth?: Number;
  width?: Number | String;
  height?: Number | String;
  backgroundColor?: String;
  onClickIcon?: () => void;
  onFocus?: (type: any) => void;
  onBlur?: () => void;
}

const RNTextInput = ({
  mBot,
  mTop,
  width,
  title,
  height,
  leftIcon,
  iconColor,
  mVerTical,
  rightIcon,
  borderColor,
  borderWidth,
  mHorizontal,
  borderRadius,
  backgroundColor,
  placeholder,
  fontSize = 'Title',
  sizeOfIcon = 'Medium',
  fontWeightFamily = 'Bold',
  keyboardType,
  onClickIcon,
  onFocus,
  onBlur,
  ...more
}: ITextInputProps) => {
  return (
    <RNView
      fill
      justifiedCenter
      mTop={mTop}
      mBot={mBot}
      width={width}
      height={height}
      mVertical={mVerTical}
      mHorizontal={mHorizontal}>
      {title && (
        <RNText
          fontFamilyWeight={fontWeightFamily}
          fontSize={fontSize}
          mBottom={10}>
          {title}
        </RNText>
      )}
      <RNView
        row
        justifiedCenter
        alignItemCenter
        pHorizonal={10}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}>
        {leftIcon && (
          <RNPressable onPress={onClickIcon}>
            <Icon
              name={leftIcon}
              size={Fonts.iconSize[sizeOfIcon]}
              color={iconColor}
            />
          </RNPressable>
        )}
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onBlur={onBlur}
          {...more}
          style={styles.textInput}
        />
        {rightIcon && (
          <RNPressable onPress={onClickIcon}>
            <Icon
              name={rightIcon}
              size={Fonts.iconSize[sizeOfIcon]}
              color={iconColor}
            />
          </RNPressable>
        )}
      </RNView>
    </RNView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
  },
});

export default RNTextInput;
