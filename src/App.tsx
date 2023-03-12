import React from 'react';

import {RNView, RNTextInput} from '../src/components/core';

const HealthCareApp = () => {
  return (
    <RNView fill center>
      <RNTextInput
        leftIcon={'search'}
        sizeOfIcon="VerySmall"
        placeholder="Enter your email"
        title={'Email'}
      />
    </RNView>
  );
};
export default HealthCareApp;
