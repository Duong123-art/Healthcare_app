import {Pressable, PressableProps, StyleSheet, ColorValue} from 'react-native';
import React from 'react';

interface IRNPressableProps extends PressableProps {
  fill?: Boolean;
  children: React.ReactNode;
  mHor?: Number;
  mVer?: Number;
  mTop?: Number;
  mLeft?: Number;
  mRight?: Number;
  mBot?: Number;
  pVer?: Number;
  pHor?: Number;
  width?: Number;
  height?: Number;
  borderRadius?: Number;
  borderColor?: Number;
  borderWidth?: Number;
  size?: Number;
  backgroundColor?: ColorValue;
}

const RNPressable = ({
  fill,
  children,
  mHor,
  mLeft,
  mRight,
  mBot,
  mVer,
  pVer,
  pHor,
  width,
  height,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  size,
  ...more
}: IRNPressableProps) => {
  return (
    <Pressable
      style={[
        fill && styles.fill,
        mHor && {marginHorizontal: mHor},
        mBot && {marginBottom: mBot},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mVer && {marginVertical: mVer},
        pVer && {paddingVertical: pVer},
        pHor && {paddingHorizontal: pHor},
        width && {width: size | width},
        height && {height: size | height},
        borderColor && {borderColor: borderColor},
        borderWidth && {borderWidth: borderWidth},
        borderRadius && {borderRadius: borderRadius},
        backgroundColor && {backgroundColor: backgroundColor},
      ]}
      {...more}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});

export default RNPressable;
