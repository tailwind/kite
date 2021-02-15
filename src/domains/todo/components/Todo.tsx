import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { Checkbox } from './Checkbox';

export type TodoProps = {
  content: string;
  completed: boolean;
  onToggle: (currentValue: boolean) => void;
  onDelete: () => void;
};

export const Todo: FC<TodoProps> = ({ content, completed, onToggle, onDelete }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1 }}>
    <Text style={{ flex: 1 }}>{content}</Text>
    <Checkbox value={completed} onPress={onToggle} />
    <Button title="delete" onPress={onDelete} />
  </View>
);
