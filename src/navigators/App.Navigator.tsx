/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {navigationRef, useBackButtonHandler} from './NavigationUtilities';
import {OnboardingNavigator} from './onboarding/Onboarding.navigator';
import Config from '../config';
import customStyle from '../theme/customStyle';
import {NAVIGATOR_MAIN, NAVIGATOR_ONBOARDING} from './Navigators';
import {MainNavigator} from './main/Main.navigator';
import {StackScreenProps} from '@react-navigation/stack';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  [NAVIGATOR_ONBOARDING]: undefined;
  [NAVIGATOR_MAIN]: undefined;
};

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes;
const redirectHomeRoutes = Config.redirectHomeRoutes;

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NAVIGATOR_ONBOARDING}>
      {/* ONBOARDING STEPS */}
      <Stack.Screen
        name={NAVIGATOR_ONBOARDING}
        component={OnboardingNavigator}
      />
      <Stack.Screen name={NAVIGATOR_MAIN} component={MainNavigator} />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(
    routeName => exitRoutes.includes(routeName),
    routeName => redirectHomeRoutes.includes(routeName),
  );
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        dark: true,
        colors: {
          ...DarkTheme.colors,
          background: customStyle.getThemeColor('gray.800'),
        },
      }}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
