import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

import {AppStackParamList} from '../App.navigator';
import {SCREEN_ONBOARDING_WELCOME} from './Screens';
import {OnboardingWelcomeScreen} from '../../screens/onboarding/OnboardingWelcome.screen';

export type OnboardingStackParamList = AppStackParamList & {
  [SCREEN_ONBOARDING_WELCOME]: undefined;
};

export type OnboardingStackScreenProps<
  T extends keyof OnboardingStackParamList,
> = StackScreenProps<OnboardingStackParamList, T>;

export function OnboardingNavigator() {
  const Stack = createNativeStackNavigator<OnboardingStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={SCREEN_ONBOARDING_WELCOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREEN_ONBOARDING_WELCOME}
        component={OnboardingWelcomeScreen}
      />
    </Stack.Navigator>
  );
}
