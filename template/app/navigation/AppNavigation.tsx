import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { AuthorizationStack } from './AuthStack';

enableScreens();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthorizationStack />
    </NavigationContainer>
  );
}
