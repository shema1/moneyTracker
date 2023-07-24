import React, {FC} from 'react';
import {Box} from 'native-base';
import customStyle from '../../theme/customStyle';

interface LayoutFullScreenProps {
  children: React.ReactNode;
}

export const LayoutFullScreen: FC<LayoutFullScreenProps> = props => {
  const {children} = props;

  return (
    <Box
      safeArea
      height="100%"
      backgroundColor={customStyle.layout.backgroundColor}>
      {children}
    </Box>
  );
};
