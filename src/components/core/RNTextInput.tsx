import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';

import {iconSize} from 'themes/Fonts';
import {RNView, RNText} from '../core';
import {ITextInputProps} from 'constants/interface';

const RNTextInput = ({
  title,
  fontWeightFamily = 'Bold',
  fontSize = 'Title',
  sizeOfIcon = 'Medium',
  leftIcon,
  rightIcon,
  mHorizontal,
  mVerTical,
  mTop,
  mBot,
  borderRadius,
  borderColor,
  borderWidth,
  width,
  height,
  backgroundColor,
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
      borderWidth={borderWidth}
      mHorizontal={mHorizontal}
      borderColor={borderColor}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}>
      {title && (
        <RNText
          text={title}
          fontFamilyWeight={fontWeightFamily}
          fontSize={fontSize}
        />
      )}
      <RNView row justifiedCenter alignItemCenter>
        {leftIcon && <Icon name={leftIcon} size={iconSize[sizeOfIcon]} />}
        <TextInput placeholder={'Hello'} {...more} />
        {rightIcon && <Icon name={rightIcon} size={iconSize[sizeOfIcon]} />}
      </RNView>
    </RNView>
  );
};

export default RNTextInput;
