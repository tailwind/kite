import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/state';
import { createTodo, selectAllTodos } from 'src/state/todoSlice';

export const SyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SyncReduxTodoScreen</Text>
      {todos.map(todo => (
        <Text key={todo.id}>{todo.content}</Text>
      ))}
      <Button title="Add Todo" onPress={() => dispatch(createTodo('Test'))} />
    </View>
  );
};
