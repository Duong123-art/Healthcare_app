import {Text, StyleSheet} from 'react-native';
import React from 'react';
import Fonts from 'themes/fonts';

interface IRNTextProps {
  text?: String;
  color?: String;
  line?: Number;
  center?: Boolean;
  fill?: Boolean;
  mTop?: Number;
  mBottom?: Number;
  mHorizontal?: Number;
  mVertical?: Number;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  width?: Number;
  height?: Number;
}

const RNText = ({
  text,
  color,
  line,
  center,
  fill,
  textAlign,
  mTop,
  mBottom,
  mHorizontal,
  mVertical,
  width,
  height,
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
      ]}
      numberOfLines={line}>
      {text}
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
  regular12: {
    fontSize: Fonts.size.S12,
    fontFamily: Fonts.type.regular,
  },
  regular14: {
    fontSize: Fonts.size.S14,
    fontFamily: Fonts.type.regular,
  },
  regular16: {
    fontSize: Fonts.size.S16,
    fontFamily: Fonts.type.regular,
  },
  regular18: {
    fontSize: Fonts.size.S18,
    fontFamily: Fonts.type.regular,
  },
  regular20: {
    fontSize: Fonts.size.S20,
    fontFamily: Fonts.type.regular,
  },
  regular24: {
    fontSize: Fonts.size.S24,
    fontFamily: Fonts.type.regular,
  },
  demiBold10: {
    fontSize: Fonts.size.S12,
    fontFamily: Fonts.type.demiBold,
  },
  demiBold14: {
    fontSize: Fonts.size.S14,
    fontFamily: Fonts.type.demiBold,
  },
  demiBold16: {
    fontSize: Fonts.size.S16,
    fontFamily: Fonts.type.demiBold,
  },
  demiBold18: {
    fontSize: Fonts.size.S18,
    fontFamily: Fonts.type.demiBold,
  },
  demiBold20: {
    fontSize: Fonts.size.S20,
    fontFamily: Fonts.type.demiBold,
  },
  demiBold24: {
    fontSize: Fonts.size.S24,
    fontFamily: Fonts.type.demiBold,
  },
});
