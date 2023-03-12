import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput, StyleSheet} from 'react-native';

import {RNView, RNText} from '../core';

interface ITextInputProps {
  title?: String;
  iconName?: String;
  // placeholder?: String;
  // isHiddenTitle: String;
}

const RNTextInput = ({title}: ITextInputProps) => {
  return (
    <RNView>
      {title && <RNText text={title} />}
      <TextInput placeholder="" />
      <Icon name="search" size={20} />
    </RNView>
  );
};

export default RNTextInput;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-evenly'},
  titleStyle: {fontSize: 16, fontFamily: 'OpenSans-Medium'},
  textFieldWithIconContainer: {flexDirection: 'row'},
  underCoreContainer: {
    flexDirection: 'column',
    flex: 2,
    alignItems: 'stretch',
  },
  underCoreStyle: {
    height: 1,
    backgroundColor: 'red',
    alignSelf: 'stretch',
    marginRight: 10,
    opacity: 0.5,
  },
});
