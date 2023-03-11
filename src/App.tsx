import React from 'react';
import {RNText, RNView} from '../src/components/core';

const HealthCareApp = () => {
  return (
    <RNView fill center>
      <RNText
        text={'Duong Quang'}
        textAlign="left"
        fontSize={30}
        fontFamilyWeight="Bold"
      />
    </RNView>
  );
};
export default HealthCareApp;
