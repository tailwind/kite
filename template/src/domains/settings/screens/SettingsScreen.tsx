import React, { FC } from 'react';
import { Text } from 'react-native';
import { Button } from 'src/components/Button';
import { Content } from 'src/components/Content';
import { Input } from 'src/components/Input';
import { Screen } from 'src/components/Screen';

export const SettingsScreen: FC = () => (
  <Screen padding="lg" unsafe>
    <Text>SettingsScreen</Text>
    <Button size="xs" buttonStyle={{ alignSelf: 'center' }}>
      Button
    </Button>
    <Button size="sm" buttonStyle={{ alignSelf: 'center' }}>
      Button
    </Button>
    <Button size="md" buttonStyle={{ alignSelf: 'center' }}>
      Button
    </Button>
    <Button size="lg" buttonStyle={{ alignSelf: 'center' }}>
      Button
    </Button>
    <Input size="xs" value="Extra Small" />
    <Input size="sm" value="Small" />
    <Input size="md" value="Medium" />
    <Input size="lg" value="Large" />

    <Content text="Title" subText="Subtitle" leftIcon="close" rightIcon="home" />
    <Content text="Title" subText="Subtitle" leftIcon="close" rightIcon="home" />
    <Content text="Title" subText="Subtitle" leftIcon="close" rightIcon="home" />
  </Screen>
);
