import React, {FC} from 'react';
import {MainStackScreenProps} from '../../navigators/main/Main.navigator';
import {HOME} from '../../navigators/main/Screens';
import {Box, Text} from 'native-base';

interface MainScreenProps extends MainStackScreenProps<typeof HOME> {}

export const MainScreen: FC<MainScreenProps> = () => {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  );
};
