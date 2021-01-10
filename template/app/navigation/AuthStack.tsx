import React from 'react';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { View } from 'react-native';
import { AuthStackProps } from './types';

const AuthorizationStackNavigator = createStackNavigator<AuthStackProps>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export function AuthorizationStack() {
  return (
    <AuthorizationStackNavigator.Navigator screenOptions={screenOptions}>
      <AuthorizationStackNavigator.Screen
        component={View}
        name='/'
      />
    </AuthorizationStackNavigator.Navigator>
  );
}
