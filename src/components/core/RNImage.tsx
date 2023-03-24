import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  ColorValue,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {RNView} from '../core';

interface IImageProps {
  width?: Number;
  height?: Number;
  size?: Number;
  src?: ImageSourcePropType;
  loadingSize?: 'small' | 'large' | undefined;
  loadingColor?: ColorValue;
  isLoading?: Boolean;
  mVertical?: Number;
  mHorizontal?: Number;
  mTop?: Number;
  mBot?: Number;
  mLeft?: Number;
  mRight?: Number;
}

const RNImage = ({
  width,
  height,
  src,
  loadingSize,
  loadingColor,
  isLoading = false,
  mVertical,
  mHorizontal,
  mTop,
  mBot,
  mLeft,
  mRight,
}: IImageProps) => {
  return (
    <RNView
      width={width}
      height={height}
      mBot={mBot}
      mTop={mTop}
      mLeft={mLeft}
      mRight={mRight}
      mHorizontal={mHorizontal}
      mVertical={mVertical}>
      <Image source={src} resizeMode="cover" style={styles.fill} />
      {isLoading && (
        <ActivityIndicator
          size={loadingSize}
          color={loadingColor}
          style={styles.indicatorConfig}
        />
      )}
    </RNView>
  );
};

export default RNImage;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  indicatorConfig: {
    alignSelf: 'center',
    position: 'absolute',
  },
});
