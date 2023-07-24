import React, {FC} from 'react';
import {Box, Button, Text} from 'native-base';
import {OnboardingStackScreenProps} from '../../navigators/onboarding/Onboarding.navigator';
import {SCREEN_ONBOARDING_WELCOME} from '../../navigators/Screens';
import {NAVIGATOR_MAIN} from '../../navigators/Navigators';
import {LayoutMenu} from '../../components/LayoutMenu';

interface OnboardingWelcomeScreenProps
  extends OnboardingStackScreenProps<typeof SCREEN_ONBOARDING_WELCOME> {}

export const OnboardingWelcomeScreen: FC<OnboardingWelcomeScreenProps> = ({
  navigation,
}) => {
  const onClickNext = () => {
    navigation.navigate(NAVIGATOR_MAIN);
  };

  return (
    <LayoutMenu>
      <Box backgroundColor="#000" height="100%" width="100%">
        <Text>Onboarding</Text>
        <Button onPress={onClickNext}> go to main</Button>
      </Box>
    </LayoutMenu>
  );
};
