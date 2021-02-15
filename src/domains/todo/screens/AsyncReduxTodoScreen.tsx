import { unwrapResult } from '@reduxjs/toolkit';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from 'src/domains/todo/components/Todo';
import { AppDispatch } from 'src/state';
import { createTodo, listTodos, removeTodo, selectAllTodos, toggleTodo } from 'src/state/todoSlice';

export const AsyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const [newTodoContent, setNewTodoContent] = useState<string>('');

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AsyncRedux</Text>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          onDelete={() => dispatch(removeTodo(todo.id))}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button title="Add Todo" onPress={onCreate} />
    </View>
  );
};
