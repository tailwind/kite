import { useNavigation } from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { BottomTabNavigatorProp } from 'src/domains/core/screens/BottomTabNavigator';
import { Todo } from 'src/domains/todo/components/Todo';
import { AppDispatch } from 'src/state';
import { createTodo, listTodos, removeTodo, selectAllTodos, toggleTodo } from 'src/state/todoSlice';

export const AsyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const [newTodoContent, setNewTodoContent] = useState<string>('');
  const navigation = useNavigation<BottomTabNavigatorProp<'AsyncRedux'>>();

  useEffect(() => {
    dispatch(listTodos())
      .then(unwrapResult)
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const onCreate = useCallback(() => {
    dispatch(createTodo(newTodoContent))
      .then(unwrapResult)
      .then(() => {
        setNewTodoContent('');
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch, newTodoContent]);

  return (
    <Screen variant="scrolling">
      <Text variant="header">AsyncRedux</Text>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          onDelete={() => dispatch(removeTodo(todo.id))}
          onDetails={() => navigation.navigate('TodoDetailScreen', { todoId: todo.id })}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button colorScheme="red" onPress={onCreate}>
        Add Todo
      </Button>
    </Screen>
  );
};
