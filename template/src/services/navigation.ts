import { NavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';
import { AppNavigatorParams } from 'src/domains/core/screens/AppNavigator';

export const navigationRef = createRef<NavigationContainerRef>();

/**
 * This is only for notifications and other things outside of the react context
 * Prefer the useNavigation hook when possible
 */
export function navigate<T extends keyof AppNavigatorParams>(name: T, params?: AppNavigatorParams[T]) {
  navigationRef.current?.navigate(name, params);
}
