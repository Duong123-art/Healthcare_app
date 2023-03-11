import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';

interface IRNViewProps extends ViewProps {
  fill?: Boolean;
  row?: Boolean;
  center?: Boolean;
  absolute?: Boolean;
  alignSelfCenter?: Boolean;
  justifiedCenter?: Boolean;
  alignItemCenter?: Boolean;
  children?: React.ReactNode;
  width?: Number;
  height?: Number;
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
  style?: ViewStyle;
}

const RNView = ({
  fill,
  children,
  center,
  justifiedCenter,
  alignItemCenter,
  mHorizontal,
  mVertical,
  width,
  height,
  mTop,
  mBot,
  absolute,
  absoluteTop,
  absoluteBottom,
  absoluteLeft,
  absoluteRight,
  borderRadius,
  borderColor,
  borderWidth,
  alignSelfCenter,
  row,
  style,
  ...more
}: IRNViewProps) => {
  return (
    <View
      style={[
        fill && styles.fill,
        justifiedCenter && styles.justifyContentCenter,
        alignItemCenter && styles.alignItemCenter,
        center && styles.center,
        mHorizontal && {marginHorizontal: mHorizontal},
        mVertical && {marginVertical: mVertical},
        mBot && {marginBottom: mBot},
        row && styles.row,
        mTop && {marginTop: mTop},
        mBot && {marginBottom: mBot},
        width && {width: width},
        height && {height: height},
        absolute && {
          ...styles.absolute,
          top: absoluteTop,
          bottom: absoluteBottom,
          left: absoluteLeft,
          right: absoluteRight,
        },
        borderRadius && {borderRadius: borderRadius},
        borderColor && {borderColor: borderColor},
        borderWidth && {borderWidth: borderWidth},
        alignSelfCenter && styles.alignSelfCenter,
        style && style,
      ]}
      {...more}>
      {children}
    </View>
  );
};

export default RNView;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});
