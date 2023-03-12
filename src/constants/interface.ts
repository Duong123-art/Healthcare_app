import React from 'react';
import {TextProps, ViewProps, ViewStyle, TextInputProps} from 'react-native';

export interface IRNTextProps extends TextProps {
  text?: String;
  font?: String;
  color?: String;
  line?: Number;
  center?: Boolean;
  fill?: Boolean;
  mTop?: Number;
  mBottom?: Number;
  mHorizontal?: Number;
  mVertical?: Number;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  fontFamilyWeight?: 'Regular' | 'Light' | 'Medium' | 'SemiBold' | 'Bold';
  fontSize?:
    | 'Header'
    | 'SubHeader'
    | 'Title'
    | 'SubTitle'
    | 'Text'
    | 'SmallText';
  width?: Number | String;
  height?: Number | String;
}

export interface IRNViewProps extends ViewProps {
  fill?: Boolean;
  row?: Boolean;
  center?: Boolean;
  absolute?: Boolean;
  alignSelfCenter?: Boolean;
  justifiedCenter?: Boolean;
  alignItemCenter?: Boolean;
  children?: React.ReactNode;
  width?: Number | String;
  height?: Number | String;
  mTop?: Number;
  mBot?: Number;
  mHorizontal?: Number;
  mVertical?: Number;
  absoluteTop?: Number;
  absoluteBottom?: Number;
  absoluteLeft?: Number;
  absoluteRight?: Number;
  borderRadius?: Number;
  borderColor?: String;
  borderWidth?: Number;
  backgroundColor?: String;
  style?: ViewStyle;
}

export interface ITextInputProps extends TextInputProps {
  title?: String;
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
  mHorizontal?: Number;
  mVerTical?: Number;
  mTop?: Number;
  mBot?: Number;
  fill?: Boolean;
  borderRadius?: Number;
  borderColor?: String;
  borderWidth?: Number;
  width?: Number | String;
  height?: Number | String;
  backgroundColor?: String;
}

export interface IContainerProps {
  children?: React.ReactNode;
}
