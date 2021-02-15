import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { BottomTabNavigator } from 'src/domains/core/screens/BottomTabNavigator';

const App: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
