import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  FlexStyle,
  ActivityIndicator,
} from 'react-native';

interface IRNViewProps extends ViewProps {
  fill?: Boolean;
  row?: Boolean;
  center?: Boolean;
  absolute?: Boolean;
  alignSelfCenter?: Boolean;
  justifyContent?: FlexStyle['justifyContent'];
  alignItem?: FlexStyle['alignItems'];
  justifiedCenter?: Boolean;
  alignItemCenter?: Boolean;
  children?: React.ReactNode;
  width?: Number | String;
  height?: Number | String;
  mTop?: Number;
  mBot?: Number;
  mLeft?: Number;
  mRight?: Number;
  pTop?: Number;
  pBot?: Number;
  flex?: Number;
  pHorizonal?: Number;
  pVertical?: Number;
  mHorizontal?: Number;
  mVertical?: Number;
  absoluteTop?: Number;
  absoluteBottom?: Number;
  absoluteLeft?: Number;
  absoluteRight?: Number;
  borderRadius?: Number;
  borderColor?: String;
  borderWidth?: Number;
  borderStyle?: ViewStyle['borderStyle'];
  backgroundColor?: String;
  isLoading?: Boolean;
  loadingSize?: 'large' | 'small' | undefined;
  loadingColor?: String;
  style?: ViewStyle;
}

const RNView = ({
  fill,
  row,
  mTop,
  mBot,
  pTop,
  mLeft,
  mRight,
  pBot,
  width,
  style,
  height,
  center,
  absolute,
  children,
  mVertical,
  pVertical,
  pHorizonal,
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
  justifyContent,
  borderStyle,
  isLoading = false,
  loadingSize,
  loadingColor,
  alignItem,
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
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBot && {paddingBottom: pBot},
        height && {height: height},
        mBot && {marginBottom: mBot},
        pHorizonal && {paddingHorizontal: pHorizonal},
        pVertical && {paddingVertical: pVertical},
        mVertical && {marginVertical: mVertical},
        borderStyle && {borderStyle: borderStyle},
        borderColor && {borderColor: borderColor},
        borderWidth && {borderWidth: borderWidth},
        borderRadius && {borderRadius: borderRadius},
        mHorizontal && {marginHorizontal: mHorizontal},
        backgroundColor && {backgroundColor: backgroundColor},
        justifyContent && {justifyContent: justifyContent},
        alignItem && {alignItems: alignItem},
      ]}
      {...more}>
      {children}
      {isLoading && (
        <ActivityIndicator
          size={loadingSize}
          color={loadingColor}
          style={styles.absolute}
        />
      )}
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
