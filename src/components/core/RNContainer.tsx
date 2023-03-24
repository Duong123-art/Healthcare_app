import React from 'react';

import RNView from './RNView';
import {IContainerProps} from 'constants/interface';

const RNContainer = ({
  children,
  justifyContentCenter,
  alignItemCener,
  backgroundColor,
}: IContainerProps) => {
  return (
    <RNView
      fill
      justifiedCenter={justifyContentCenter}
      alignItemCenter={alignItemCener}
      backgroundColor={backgroundColor}>
      {children}
    </RNView>
  );
};

export default RNContainer;
