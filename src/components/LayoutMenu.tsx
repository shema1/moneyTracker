import React, {FC} from 'react';
import {Box, ScrollView, Spinner} from 'native-base';
import customStyle from '../theme/customStyle';

interface LayoutMenuProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const LayoutMenu: FC<LayoutMenuProps> = props => {
  const {children, isLoading} = props;

  return (
    <Box
      flex={1}
      height="100%"
      width="100%"
      alignSelf="center"
      backgroundColor={customStyle.layout.backgroundColor}>
      {isLoading && (
        <Box flex={1} justifyContent="center">
          <Spinner size="lg" />
        </Box>
      )}
      {!isLoading && (
        <ScrollView
          pt={4}
          px={customStyle.layoutMenu.container.paddingX}
          height="100%">
          {children}
        </ScrollView>
      )}
    </Box>
  );
};
