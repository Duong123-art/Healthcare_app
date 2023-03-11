import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

interface ITextInputProps {
  title?: String;
  placeholder?: String;
  isHiddenTitle: String;
}

const RNTextInput = ({title, placeholder, isHiddenTitle}: ITextInputProps) => {
  return (
    <View style={styles.container}>
      {!isHiddenTitle && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={styles.textFieldWithIconContainer}>
        <View style={styles.underCoreContainer}>
          <TextInput style={{alignSelf: 'stretch'}} placeholder={placeholder} />
          <View style={styles.underCoreStyle} />
        </View>
      </View>
    </View>
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
