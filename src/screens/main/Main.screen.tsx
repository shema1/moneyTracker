import React, {FC} from 'react';
import {MainStackScreenProps} from '../../navigators/main/Main.navigator';
import {HOME} from '../../navigators/main/Screens';
import {Box, Text} from 'native-base';
import {LayoutFullScreen} from '../../components/layouts/LayoutFullScreen';

interface MainScreenProps extends MainStackScreenProps<typeof HOME> {}

export const MainScreen: FC<MainScreenProps> = () => {
  return (
    <LayoutFullScreen>
      <Box flex={1}>
        <Text>Home</Text>
      </Box>
    </LayoutFullScreen>
  );
};
