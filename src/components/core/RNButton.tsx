import {StyleSheet, ButtonProps, ColorValue} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {RNPressable, RNText} from '../core';

interface IRNButton extends ButtonProps {
  fill?: Boolean;
  iconName: String;
  title?: String;
  size?: Number;
  backgroundColor?: ColorValue;
  iconColor?: ColorValue;
}

const RNButton = ({
  fill,
  title,
  iconName = '',
  size,
  backgroundColor,
  iconColor,
}: IRNButton) => {
  return (
    <RNPressable fill={fill} backgroundColor={backgroundColor}>
      {iconName && <Icon name={iconName} size={size} color={iconColor} />}
      {title && <RNText>{title}</RNText>}
    </RNPressable>
  );
};

export default RNButton;
