import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { AuthorizationStack } from './AuthStack';
import { useAppSelector } from '../redux/hooks/selectors';
import { Splash } from '../screens/Splash';

enableScreens();

export function AppNavigator() {
  const isInitialized = useAppSelector(state => state.app.initialized);
  if (!isInitialized) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <AuthorizationStack />
    </NavigationContainer>
  );
}
