import React, { FC } from 'react';
import { Text } from 'react-native';

export type CheckboxProps = {
  value: boolean;
  onPress: (currentValue: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ value = false, onPress = () => {} }) => (
  <Text onPress={() => onPress(value)}>{value ? '[x]' : '[  ]'}</Text>
);
