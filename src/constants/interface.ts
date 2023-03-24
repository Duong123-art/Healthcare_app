import React from 'react';
import {TextProps, TextInputProps} from 'react-native';

export interface IRNTextProps extends TextProps {
  font?: String;
  color?: String;
  line?: Number;
  center?: Boolean;
  fill?: Boolean;
  flex?: Number;
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
  children?: React.ReactNode;
}

export interface IContainerProps {
  alignItemCener?: Boolean;
  backgroundColor?: String;
  children?: React.ReactNode;
  justifyContentCenter?: Boolean;
}
