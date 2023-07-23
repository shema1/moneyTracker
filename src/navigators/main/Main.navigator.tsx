import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '../App.navigator';
import {HOME} from './Screens';
import {MainScreen} from '../../screens/main/Main.screen';

export type MainStackParamList = AppStackParamList & {
  [HOME]: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

export function MainNavigator() {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME} component={MainScreen} />
    </Stack.Navigator>
  );
}
