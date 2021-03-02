import React, { FC } from 'react';
import { Button } from 'src/components/Button';

export type CheckboxProps = {
  value: boolean;
  onPress: (currentValue: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({ value = false, onPress = () => {} }) => (
  <Button variant="ghost" size="sm" onPress={() => onPress(value)}>
    {value ? '[x]' : '[  ]'}
  </Button>
);
