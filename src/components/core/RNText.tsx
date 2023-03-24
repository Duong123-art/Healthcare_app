import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Fonts} from 'themes';
import {IRNTextProps} from 'constants/interface';

const RNText = ({
  color,
  line,
  flex,
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
        fill && styles.fill,
        flex && {flex: flex},
        center && styles.center,
        textAlign && {textAlign: textAlign},
        color && {color: color},
        mHorizontal && {marginHorizontal: mHorizontal},
        mVertical && {marginVertical: mVertical},
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        width && {width: width},
        height && {height: height},
        fontSize && {fontSize: Fonts.size[fontSize]},
        fontFamilyWeight && {fontFamily: Fonts.type[fontFamilyWeight]},
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
    flex: 1,
  },
  center: {
    justifyContent: 'center',
  },
});
