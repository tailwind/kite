import React, { FC, useCallback, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/state';
import { createTodo, deleteTodo, selectAllTodos, toggleTodo } from 'src/state/todoSlice';

export const SyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const [newTodoContent, setNewTodoContent] = useState<string>('');

  const onCreate = useCallback(() => dispatch(createTodo(newTodoContent)), [dispatch, newTodoContent]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SyncReduxTodoScreen</Text>
      {todos.map(todo => (
        <View key={todo.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text key={todo.id}>{todo.content}</Text>
          <Button title={todo.completed ? '[x]' : '[  ]'} onPress={() => dispatch(toggleTodo(todo.id))} />
          <Button title="Delete" onPress={() => dispatch(deleteTodo(todo.id))} />
        </View>
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button title="Add Todo" onPress={onCreate} />
    </View>
  );
};
