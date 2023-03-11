import {Text, StyleSheet} from 'react-native';
import React from 'react';
import Fonts from 'themes/Fonts';

interface IRNTextProps {
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
  fontFamilyWeight?: 'regular' | 'light' | 'medium' | 'semiBold' | 'Bold';
  fontSize?: Number;
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
  fontFamilyWeight,
  fontSize,
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
        fontSize && {fontSize: fontSize},
        fontFamilyWeight && {fontFamily: Fonts.type[fontFamilyWeight]},
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
});
