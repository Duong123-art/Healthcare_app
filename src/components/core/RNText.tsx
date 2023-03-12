import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {size, type} from 'themes/Fonts';
import {IRNTextProps} from 'constants/interface';

const RNText = ({
  color,
  line,
  center,
  fill,
  textAlign,
  mTop,
  mBottom,
  mHorizontal,
  mVertical,
  fontFamilyWeight = 'Medium',
  fontSize = 'Text',
  width,
  height,
  children,
  ...more
}: IRNTextProps) => {
  return (
    <Text
      style={[
        textAlign && {textAlign: textAlign},
        color && {color: color},
        center && styles.center,
        fill && styles.fill,
        mHorizontal && {marginHorizontal: mHorizontal},
        mVertical && {marginVertical: mVertical},
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        width && {width: width},
        height && {height: height},
        fontSize && {fontSize: size[fontSize]},
        fontFamilyWeight && {fontFamily: type[fontFamilyWeight]},
      ]}
      numberOfLines={line}
      {...more}>
      {children}
    </Text>
  );
};

export default RNText;

const styles = StyleSheet.create({
  fill: {
    // flex: 1,
    backgroundColor: 'red',
  },
  center: {
    justifyContent: 'center',
  },
});
