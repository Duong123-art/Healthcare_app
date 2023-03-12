import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNView from './RNView';
import {IContainerProps} from 'constants/interface';

const RNContainer = ({children}: IContainerProps) => {
  return <RNView fill>{children}</RNView>;
};

export default RNContainer;
