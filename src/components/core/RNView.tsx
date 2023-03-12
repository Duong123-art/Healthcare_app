import React from 'react';
import {StyleSheet, View} from 'react-native';

import {IRNViewProps} from 'constants/interface';

const RNView = ({
  fill,
  row,
  mTop,
  mBot,
  width,
  style,
  height,
  center,
  absolute,
  children,
  mVertical,
  mHorizontal,
  absoluteTop,
  borderColor,
  borderWidth,
  absoluteLeft,
  borderRadius,
  absoluteRight,
  absoluteBottom,
  justifiedCenter,
  alignItemCenter,
  alignSelfCenter,
  backgroundColor,
  ...more
}: IRNViewProps) => {
  return (
    <View
      style={[
        style && style,
        row && styles.row,
        fill && styles.fill,
        center && styles.center,
        alignSelfCenter && styles.alignSelfCenter,
        alignItemCenter && styles.alignItemCenter,
        justifiedCenter && styles.justifyContentCenter,
        absolute && {
          ...styles.absolute,
          top: absoluteTop,
          bottom: absoluteBottom,
          left: absoluteLeft,
          right: absoluteRight,
        },
        width && {width: width},
        mTop && {marginTop: mTop},
        height && {height: height},
        mBot && {marginBottom: mBot},
        mVertical && {marginVertical: mVertical},
        borderColor && {borderColor: borderColor},
        borderWidth && {borderWidth: borderWidth},
        borderRadius && {borderRadius: borderRadius},
        mHorizontal && {marginHorizontal: mHorizontal},
        backgroundColor && {backgroundColor: backgroundColor},
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
